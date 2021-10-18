import HTMLReactParser from "html-react-parser";
import millify from "millify";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { useQuery } from "react-query";
import { Loader } from ".";
import { getExchanges } from "../helpers/api";

export default function ExchangeTable() {
	const { isLoading, data: exchanges } = useQuery("getExchanges", getExchanges);

	if (isLoading) return <Loader />;
	return (
		<div className="border">
			{exchanges.data.exchanges.map((exchange, index) => (
				<TableRow key={index} exchange={exchange} />
			))}
		</div>
	);
}

const TableRow = ({ exchange }) => {
	const [showDesc, setShowDesc] = useState(false);

	return (
		<>
			<div
				onClick={() => setShowDesc(!showDesc)}
				className="grid grid-cols-6 h-16 items-center border-b cursor-pointer bg-gray-50">
				<div className="flex space-x-2 items-center col-span-3 px-5">
					<span>{exchange.rank}.</span>
					<img src={exchange.iconUrl} alt="" className="w-10 rounded-full" />
					<span>{exchange.name}</span>
				</div>
				<div>${millify(exchange.volume)}</div>
				<div>{millify(exchange.numberOfMarkets)}</div>
				<div>{millify(exchange.marketShare)}%</div>
			</div>
			<AnimateHeight
				id="example-panel"
				duration={500}
				height={showDesc ? "auto" : "0"}>
				<div className="p-5 text-sm bg-white">
					{HTMLReactParser(exchange.description || "")}
				</div>
			</AnimateHeight>
		</>
	);
};
