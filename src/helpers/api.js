import axios from "axios";

const globalStatsOptions = {
	method: "GET",
	url: "https://coinranking1.p.rapidapi.com/stats",
	headers: {
		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
	},
};

const coinsOptions = {
	method: "GET",
	url: "https://coinranking1.p.rapidapi.com/coins",
	headers: {
		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
	},
};

const exchangesOptions = {
	method: "GET",
	url: "https://coinranking1.p.rapidapi.com/exchanges",
	headers: {
		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
	},
};

export const getGlobalStats = async () => {
	try {
		const stats = await axios.request(globalStatsOptions);
		return stats.data;
	} catch (error) {
		if (error.response) {
			throw new Error(error.response.data.message);
		} else {
			throw new Error("something went wrong");
		}
	}
};

export const getCoins = async () => {
	try {
		const coins = await axios.request(coinsOptions);
		return coins.data;
	} catch (error) {
		if (error.response) {
			throw new Error(error.response.data.message);
		} else {
			throw new Error("something went wrong");
		}
	}
};

export const getCoin = async ({ id }) => {
	const options = {
		method: "GET",
		url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
		headers: {
			"x-rapidapi-host": "coinranking1.p.rapidapi.com",
			"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
		},
	};
	try {
		const coin = await axios.request(options);
		return coin.data;
	} catch (error) {
		if (error.response) {
			throw new Error(error.response.data.message);
		} else {
			throw new Error("something went wrong");
		}
	}
};

export const getCoinHistory = async ({ id, period }) => {
	const options = {
		method: "GET",
		url: `https://coinranking1.p.rapidapi.com/coin/${id}/history/${period}`,
		headers: {
			"x-rapidapi-host": "coinranking1.p.rapidapi.com",
			"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
		},
	};
	try {
		const coinHistory = await axios.request(options);
		return coinHistory.data;
	} catch (error) {
		if (error.response) {
			throw new Error(error.response.data.message);
		} else {
			throw new Error("something went wrong");
		}
	}
};

export const getExchanges = async () => {
	try {
		const exchanges = await axios.request(exchangesOptions);
		return exchanges.data;
	} catch (error) {
		if (error.response) {
			throw new Error(error.response.data.message);
		} else {
			throw new Error("something went wrong");
		}
	}
};

export const getNews = async ({ cat }) => {
	const options = {
		method: "GET",
		url: "https://bing-news-search1.p.rapidapi.com/news/search",
		params: {
			q: cat,
			freshness: "Day",
			textFormat: "Raw",
			safeSearch: "Off",
		},
		headers: {
			"x-bingapis-sdk": "true",
			"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
			"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
		},
	};

	try {
		const {
			data: { value },
		} = await axios.request(options);
		return value;
	} catch (error) {
		if (error.response) {
			throw new Error(error.response.data.message);
		} else {
			throw new Error("something went wrong");
		}
	}
};
