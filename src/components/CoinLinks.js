export default function CoinLinks({ coin }) {
	return (
		<div>
			<h3 className="text-xl font-bold mb-3">{coin.name} Links</h3>
			{coin.links?.map((link, index) => (
				<div
					key={index}
					className="flex items-center justify-between h-14 border-b hover:bg-white">
					<p className="font-semibold">{link.type}</p>
					<a
						className="font-bold"
						href={link.url}
						target="_blank"
						rel="noreferrer">
						{link.name}
					</a>
				</div>
			))}
		</div>
	);
}
