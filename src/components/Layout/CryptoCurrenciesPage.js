import { useEffect } from "react";
import { CryptoCurrencies } from "..";

export default function CryptoCurrenciesPage() {
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<div>
			<CryptoCurrencies />
		</div>
	);
}
