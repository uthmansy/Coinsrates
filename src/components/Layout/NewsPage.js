import { useEffect } from "react";
import { News } from "..";

export default function NewsPage() {
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<div>
			<News />
		</div>
	);
}
