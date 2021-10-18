import millify from "millify";
import { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { CryptoInfo, Error, Loader } from ".";
import { getCoins } from "../helpers/api";
import { selectcoins, storeCoins } from "../store/slices/coins";

export default function CryptoCurrencies({ simplified }) {
	const dispatch = useDispatch();
	const coins = useSelector(selectcoins);

	const [search, setSearch] = useState("");

	const { isLoading, isError } = useQuery("getCoins", getCoins, {
		onSuccess: (coins) => {
			dispatch(storeCoins(coins.data.coins));
		},
		refetchOnWindowFocus: false,
		refetchIntervalInBackground: false,
	});
	if (isLoading) return <Loader />;
	if (isError) return <Error />;
	return (
		<>
			{!simplified && (
				<div className="flex items-center shadow-md rounded-full overflow-hidden mb-10 h-11 w-full sm:w-72 bg-white">
					<div className="p-3 text-gray-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>

					<input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						placeholder="Search..."
						className="outline-none flex-1 h-full"
					/>
				</div>
			)}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
				{coins
					.slice(0, simplified ? 10 : 100)
					.filter(({ name }) =>
						name.toLowerCase().includes(search.toLowerCase())
					)
					.map(
						({ id, rank, name, iconUrl, price, marketCap, change, uuid }) => (
							<CryptoInfo
								key={id}
								id={id}
								name={name}
								iconUrl={iconUrl}
								price={millify(price)}
								marketCap={millify(marketCap)}
								rank={rank}
								dailyChange={change}
							/>
						)
					)}
			</div>
		</>
	);
}
