import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import {
	HomeOutlined,
	LineChartOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
} from "@ant-design/icons";

export default function MobileMenu() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className="sticky top-0 bg-primary text-white px-5 shadow-md">
			<div className="h-16 max-w-screen-md mx-auto flex items-center justify-between">
				<Link to="/">
					<img src="/images/logo.png" alt="logo" className="h-10" />
				</Link>
				<div>
					<button
						onClick={() => setShowMenu(!showMenu)}
						className="flex items-center justify-center">
						{showMenu ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
			{showMenu && (
				<div className="absolute right-0 top-16 bg-primary flex flex-col w-48 shadow-md">
					<Link
						onClick={() => setShowMenu(false)}
						className="hover:no-underline p-3 text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300 flex items-center"
						to={ROUTES.HOME}>
						<HomeOutlined className="mr-2" /> Home
					</Link>
					<Link
						onClick={() => setShowMenu(false)}
						className="hover:no-underline p-3 text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300 flex items-center"
						to={ROUTES.CRYPTOCURRENCIES}>
						<LineChartOutlined className="mr-2" />
						Cryptocurrencies
					</Link>
					<Link
						onClick={() => setShowMenu(false)}
						className="hover:no-underline p-3 text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300 flex items-center"
						to={ROUTES.EXCHANGES}>
						<MoneyCollectOutlined className="mr-2" />
						Exchanges
					</Link>
					<Link
						onClick={() => setShowMenu(false)}
						className="hover:no-underline p-3 text-white text-opacity-80 hover:text-opacity-100 transition-all duration-300 flex items-center"
						to={ROUTES.NEWS}>
						<BulbOutlined className="mr-2" />
						News
					</Link>
				</div>
			)}
		</nav>
	);
}
