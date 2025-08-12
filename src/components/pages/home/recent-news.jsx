import { newsData } from "../../../lib/constants";
import NewsCard from "../../cards/news-card";

const RecentNews = () => {
  return (
    <section className="max-w-[1350px] mx-auto px-8">
      <h1 className="text-center text-3xl font-bold">Recent News</h1>
      <p className="text-center max-w-xl mx-auto my-6 text-gray-500">
        Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a
        laoreet erat ornare sit amet. Nulla sagittis faucibus lacusMorbi lorem
        sem, aliquet
      </p>

      <div className="flex flex-col gap-10 lg:gap-6 lg:flex-row items-center justify-between">
        {newsData.map((news) => {
          return <NewsCard key={news.id} news={news} />;
        })}
      </div>
    </section>
  );
};

export default RecentNews;
