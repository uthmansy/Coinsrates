import {
	CheckOutlined,
	ExclamationCircleOutlined,
	FundOutlined,
	MoneyCollectOutlined,
	StopOutlined,
} from "@ant-design/icons";
import millify from "millify";

export default function GenericStats({ coin }) {
	const genericStats = [
		{
			title: "Number Of Markets",
			value: coin.numberOfMarkets,
			icon: <FundOutlined />,
		},
		{
			title: "Number Of Exchanges",
			value: coin.numberOfExchanges,
			icon: <MoneyCollectOutlined />,
		},
		{
			title: "Aprroved Supply",
			value: coin.approvedSupply ? <CheckOutlined /> : <StopOutlined />,
			icon: <ExclamationCircleOutlined />,
		},
		{
			title: "Total Supply",
			value: `$ ${millify(coin.totalSupply)}`,
			icon: <ExclamationCircleOutlined />,
		},
		{
			title: "Circulating Supply",
			value: `$ ${millify(coin.circulatingSupply)}`,
			icon: <ExclamationCircleOutlined />,
		},
	];
	return (
		<div>
			<h3 className="text-xl font-bold mb-3">Other Stats</h3>
			<p className="mb-2">
				An overview showing the statistics of {coin.name}, such as the base and
				quote currency, the rank, and trading volume.
			</p>
			<div>
				{genericStats.map((stat, index) => (
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
