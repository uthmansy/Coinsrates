export default function GlobalStatData({ title, data }) {
	return (
		<div className="bg-white p-5 rounded-md shadow-sm">
			<h3 className="text-gray-500">{title}</h3>
			<p className="text-xl">{data}</p>
		</div>
	);
}
