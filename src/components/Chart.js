import { useState } from "react";
import { useQuery } from "react-query";
import { Error, Loader, Select } from ".";
import { getCoinHistory } from "../helpers/api";
import { Line } from "react-chartjs-2";
import millify from "millify";

export default function Chart({ coinName, id, currentPrice }) {
	const periods = [
		{ name: "24h" },
		{ name: "7d" },
		{ name: "30d" },
		{ name: "1y" },
		{ name: "5y" },
	];
	const [period, setPeriod] = useState(periods[1]);

	const {
		data: coinHistory,
		isLoading,
		isError,
	} = useQuery(["getCoin", id, period.name], () =>
		getCoinHistory({ id, period: period.name })
	);

	const coinPrice = [];
	const coinTimestamp = [];

	for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
		coinPrice.push(coinHistory?.data?.history[i].price);
		coinTimestamp.push(
			new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
		);
	}

	const data = {
		labels: coinTimestamp,
		datasets: [
			{
				label: "Price In USD",
				data: coinPrice,
				fill: "false",
				backgroundColor: "#ff9900",
				borderColor: "#ff9900",
				borderWidth: 1,
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

	if (isLoading) return <Loader />;
	if (isError) return <Error />;
	return (
		<div className="mb-10">
			<Select data={periods} selected={period} setSelected={setPeriod} />
			<div className="flex items-center justify-between mt-5">
				<h3 className="font-bold">{coinName} Price Chart</h3>
				<div className="font-bold flex space-x-3">
					<span>Change: {coinHistory.data.change}%</span>
					<span>Current Price: ${millify(currentPrice)}</span>
				</div>
			</div>
			<Line data={data} options={options} />
		</div>
	);
}
