import moment from "moment";
import { useQuery } from "react-query";
import { Loader } from ".";
import { getNews } from "../helpers/api";

export default function News() {
	const cat = "Cryptocurrency";

	const { data: allNews, isLoading } = useQuery(["getNews", cat], () =>
		getNews({ cat })
	);
	console.log(allNews);

	if (isLoading) return <Loader />;
	return (
		<div className="mb-10">
			<h2 className="text-2xl mb-5">Crypto News</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
				{allNews.map((news, i) => (
					<SingleNews news={news} index={i} />
				))}
			</div>
		</div>
	);
}

const SingleNews = ({ news }) => {
	return (
		<a
			href={news.url}
			target="_blank"
			className="bg-white p-5 hover:no-underline hover:shadow-lg transition-all duration-200 shadow-md">
			<div className="flex space-x-2 justify-between">
				<h4 className="text-black leading-6">
					{news.name.length > 50
						? `${news.name.substring(0, 50)}...`
						: news.name}
				</h4>
				<img
					src={news?.image?.thumbnail?.contentUrl || "/images/default.jpg"}
					alt=""
					className="w-16 h-20 object-cover flex-shrink-0"
				/>
			</div>
			<p className="text-sm text-gray-600">
				{news.description.length > 100
					? `${news.description.substring(0, 150)}...`
					: news.description}
			</p>
			<div className="flex items-center justify-between text-gray-500 text-xs">
				<div className="flex space-x-1 items-center">
					<img
						src={
							news.provider[0]?.image?.thumbnail?.contentUrl ||
							"/images/default.jpg"
						}
						alt=""
						className="h-6 w-6 object-cover rounded-full"
					/>
					<span>
						{news.provider[0]?.name.length > 15
							? `${news.provider[0]?.name.substring(0, 15)}...`
							: news.provider[0]?.name}
					</span>
				</div>
				<div>{moment(news.datePublished).startOf("ss").fromNow()}</div>
			</div>
		</a>
	);
};
