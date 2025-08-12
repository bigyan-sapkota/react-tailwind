import { newsData } from "../../../lib/constants";
import NewsCard from "../../cards/news-card";
import DynamicText from "../../layouts/dynamic-text";

const RecentNews = () => {
  return (
    <section className="max-width">
      <DynamicText
        heading="Recent News"
        description="Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a
        laoreet erat ornare sit amet. Nulla sagittis faucibus lacusMorbi lorem
        sem, aliquet"
        isTextCenter
      />

      <div className="flex flex-col gap-10 lg:gap-6 lg:flex-row items-center justify-between">
        {newsData.map((news) => {
          return <NewsCard key={news.id} news={news} />;
        })}
      </div>
    </section>
  );
};

export default RecentNews;
