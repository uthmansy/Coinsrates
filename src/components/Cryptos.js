import { Link } from "react-router-dom";
import { CryptoCurrencies } from ".";
import { ROUTES } from "../constants/routes";

export default function Cryptos() {
	return (
		<div className="mb-10">
			<h2 className="text-2xl mb-5">
				Top 10 Cryptos In The World
				<br />
				<Link
					className="text-primary hover:underline text-sm"
					to={ROUTES.CRYPTOCURRENCIES}>
					Browse More
				</Link>
			</h2>
			<CryptoCurrencies simplified />
		</div>
	);
}
