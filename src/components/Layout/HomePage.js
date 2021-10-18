import { useEffect } from "react";
import { Cryptos, GlobalStats, News } from "..";

export default function HomePage() {
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);
	return (
		<>
			<GlobalStats />
			<Cryptos />
			<News />
		</>
	);
}
