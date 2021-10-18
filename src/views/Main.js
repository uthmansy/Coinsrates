import {
	CryptoCurrenciesPage,
	ExchangesPage,
	HomePage,
	MainLayout,
	NewsPage,
	SingleCoinPage,
} from "../components";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export default function Main() {
	return (
		<MainLayout>
			<Switch>
				<Route path={ROUTES.SINGLECOIN} component={SingleCoinPage} />
				<Route
					path={ROUTES.CRYPTOCURRENCIES}
					component={CryptoCurrenciesPage}
				/>
				<Route path={ROUTES.EXCHANGES} component={ExchangesPage} />
				<Route path={ROUTES.NEWS} component={NewsPage} />
				<Route path={ROUTES.HOME} component={HomePage} />
			</Switch>
		</MainLayout>
	);
}
