import { configureStore } from "@reduxjs/toolkit";
import coins from "./slices/coins";
import globalStats from "./slices/globalStats";

export const store = configureStore({
	reducer: {
		globalStats: globalStats,
		coins: coins,
	},
});
