import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
	AboutCoin,
	Chart,
	CoinLinks,
	CoinStats,
	GenericStats,
	Loader,
} from "..";
import { getCoin } from "../../helpers/api";

export default function SingleCoinPage() {
	const { id } = useParams();
	const { data: coin, isLoading } = useQuery(["getCoin", id], () =>
		getCoin({ id })
	);

	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	if (isLoading) return <Loader />;
	return (
		<div>
			<h2 className="text-center text-primary text-3xl font-bold mb-5">
				{coin.data.coin.name} ({coin.data.coin.slug}) Price
			</h2>
			<p className="text-center mb-10">
				{coin.data.coin.name} live price in US Dollar (USD). View value
				statistics, market cap and supply.
			</p>
			<Chart
				coinName={coin.data.coin.name}
				id={id}
				currentPrice={coin.data.coin.price}
			/>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 md:gap-20 mb-10">
				<CoinStats coin={coin.data.coin} />
				<GenericStats coin={coin.data.coin} />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 md:gap-20 mb-10">
				<AboutCoin coin={coin.data.coin} />
				<CoinLinks coin={coin.data.coin} />
			</div>
		</div>
	);
}
