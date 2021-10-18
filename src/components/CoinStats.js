import {
	DollarCircleOutlined,
	NumberOutlined,
	ThunderboltOutlined,
	TrophyOutlined,
} from "@ant-design/icons";
import millify from "millify";

export default function CoinStats({ coin }) {
	const stats = [
		{
			title: "Price to USD",
			value: `$ ${coin.price && millify(coin.price)}`,
			icon: <DollarCircleOutlined />,
		},
		{ title: "Rank", value: coin.rank, icon: <NumberOutlined /> },
		{
			title: "24h Volume",
			value: `$ ${coin.volume && millify(coin.volume)}`,
			icon: <ThunderboltOutlined />,
		},
		{
			title: "Market Cap",
			value: `$ ${coin.marketCap && millify(coin.marketCap)}`,
			icon: <DollarCircleOutlined />,
		},
		{
			title: "All-time-high(daily avg.)",
			value: `$ ${millify(coin.allTimeHigh.price)}`,
			icon: <TrophyOutlined />,
		},
	];

	return (
		<div>
			<h3 className="text-xl font-bold mb-3">{coin.name} Value Statistics</h3>
			<p className="mb-2">
				An overview showing the statistics of {coin.name}, such as the base and
				quote currency, the rank, and trading volume.
			</p>
			<div>
				{stats.map((stat, index) => (
					<div
						key={index}
						className="flex items-center justify-between h-14 border-b hover:bg-white">
						<div className="flex items-center space-x-2 leading-3">
							<div>{stat.icon}</div>
							<div>{stat.title}</div>
						</div>
						<div className="font-bold">{stat.value}</div>
					</div>
				))}
			</div>
		</div>
	);
}
