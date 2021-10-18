import { useEffect } from "react";
import { ExchangeTable } from "..";

export default function ExchangesPage() {
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<div className="text-sm overflow-x-auto">
			<div className="grid grid-cols-6 h-12 items-center">
				<div className="col-span-3">Exchanges</div>
				<div>24h Trade Volume</div>
				<div>Markets</div>
				<div>Change</div>
			</div>
			<ExchangeTable />
		</div>
	);
}
