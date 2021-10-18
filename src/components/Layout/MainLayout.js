import useScreen from "../../hooks/useScreen";
import { Menu, MobileMenu } from "../../components";

export default function MainLayout({ children }) {
	const { isLargeScreen } = useScreen();
	return (
		<div>
			{isLargeScreen ? <Menu /> : <MobileMenu />}
			<div className="max-w-screen-md lg:max-w-full mx-auto lg:mx-0 lg:ml-72 p-5 pt-10">
				{children}
			</div>
		</div>
	);
}
