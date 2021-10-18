import { Link } from "react-router-dom";

export default function CryptoInfo({
	rank,
	name,
	iconUrl,
	price,
	marketCap,
	dailyChange,
	id,
}) {
	return (
		<Link
			className="bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:no-underline"
			to={`/coin/${id}`}>
			<div className="flex items-center h-14 justify-between px-3 border-b">
				<div>{`${rank}. ${name}`}</div>
				<img src={iconUrl} alt="" className="w-8" />
			</div>
			<div className="p-3 text-sm">
				<p className="mb-3">
					<span className="text-gray-500">Price:</span> ${price}
				</p>
				<p className="mb-3">
					<span className="text-gray-500">Market Cap:</span> {marketCap}
				</p>
				<p className="mb-3">
					<span className="text-gray-500">Daily Change:</span> {dailyChange}%
				</p>
			</div>
		</Link>
	);
}
