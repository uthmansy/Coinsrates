import { isError, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getGlobalStats } from "../helpers/api";
import {
	selectGlobalStats,
	storeGlobalStats,
} from "../store/slices/globalStats";
import { Error, GlobalStatData, Loader } from ".";
import millify from "millify";

export default function GlobalStats() {
	const dispatch = useDispatch();
	const globalStats = useSelector(selectGlobalStats);

	const { isLoading, isError } = useQuery("getGlobalStats", getGlobalStats, {
		onSuccess: (stats) => {
			dispatch(storeGlobalStats(stats.data));
		},
		refetchOnWindowFocus: false,
		refetchIntervalInBackground: false,
	});

	return (
		<div className="mb-10">
			<h2 className="text-2xl mb-5">Global Crypto Stats</h2>
			{isLoading ? (
				<Loader />
			) : isError ? (
				<Error />
			) : (
				<div className="grid grid-cols-2 gap-5">
					<GlobalStatData
						title={"Total Cyptocurrencies"}
						data={millify(globalStats.totalCoins)}
					/>
					<GlobalStatData
						title={"Total Exchanges"}
						data={millify(globalStats.totalExchanges)}
					/>
					<GlobalStatData
						title={"Total Market Cap"}
						data={`$${millify(globalStats.totalMarketCap)}`}
					/>
					<GlobalStatData
						title={"Total 24H Volume"}
						data={`$${millify(globalStats.total24hVolume)}`}
					/>
					<GlobalStatData
						title={"Total Markets"}
						data={millify(globalStats.totalMarkets)}
					/>
				</div>
			)}
		</div>
	);
}
