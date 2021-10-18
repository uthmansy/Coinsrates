import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	stats: {},
};

export const globalStats = createSlice({
	name: "globalStats",
	initialState,
	reducers: {
		storeGlobalStats: (state, action) => {
			state.stats = action.payload;
		},
	},
});

export const { storeGlobalStats } = globalStats.actions;

export const selectGlobalStats = (state) => state.globalStats.stats;

export default globalStats.reducer;
