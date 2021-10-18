import HTMLReactParser from "html-react-parser";

export default function AboutCoin({ coin }) {
	return (
		<div>
			<h3 className="text-xl font-bold mb-3">What is {coin.name}</h3>
			{HTMLReactParser(coin.description)}
		</div>
	);
}
