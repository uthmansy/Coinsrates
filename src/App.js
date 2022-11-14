import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./views/Main";
function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<Main />
				<div></div>
			</div>
		</QueryClientProvider>
	);
}

export default App;
