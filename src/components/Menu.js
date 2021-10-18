import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import {
	HomeOutlined,
	LineChartOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
} from "@ant-design/icons";

export default function Menu() {
	return (
		<nav className="fixed top-0 bottom-0 left-0 lg:w-72 bg-primary text-white">
			<Link to="/" className="mb-20 p-5 block">
				<img src="/images/logo.png" alt="logo" className="h-10" />
			</Link>
			<div className="flex flex-col uppercase tracking-wider text-sm font-semibold">
				<Link
					className="hover:no-underline text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300 px-5 py-3 flex items-center"
					to={ROUTES.HOME}>
					<span className="mr-5 flex items-center justify-center h-9 w-9 bg-white bg-opacity-20 rounded-full shadow-md">
						<HomeOutlined />
					</span>
					Home
				</Link>
				<Link
					className="hover:no-underline text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300 px-5 py-3 flex items-center"
					to={ROUTES.CRYPTOCURRENCIES}>
					<span className="mr-5 flex items-center justify-center h-9 w-9 bg-white bg-opacity-20 rounded-full shadow-md">
						<LineChartOutlined />
					</span>
					Cryptocurrencies
				</Link>
				<Link
					className="hover:no-underline text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300 px-5 py-3 flex items-center"
					to={ROUTES.EXCHANGES}>
					<span className="mr-5 flex items-center justify-center h-9 w-9 bg-white bg-opacity-20 rounded-full shadow-md">
						<MoneyCollectOutlined />
					</span>
					Exchanges
				</Link>
				<Link
					className="hover:no-underline text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300 px-5 py-3 flex items-center"
					to={ROUTES.NEWS}>
					<span className="mr-5 flex items-center justify-center h-9 w-9 bg-white bg-opacity-20 rounded-full shadow-md">
						<BulbOutlined />
					</span>
					News
				</Link>
			</div>
		</nav>
	);
}
