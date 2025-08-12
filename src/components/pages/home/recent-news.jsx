import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { newsData } from "../../../lib/constants";

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
          return (
            <div key={news.id}>
              {/* thumbnail and category */}
              <div
                className={`h-64 w-full lg:w-[26rem] relative rounded-xl hover:brightness-75 custom-transition`}
                style={{
                  backgroundImage: `url('/home/${news.thumbnail}')`,
                }}
              >
                <p className="bg-yellow-400 text-sm w-fit rounded-lg px-4 py-1 absolute -bottom-2 left-3">
                  {news.category}
                </p>
              </div>

              {/* title and description */}
              <p className="font-lg font-semibold pt-6">{news.title}</p>

              <p className="mt-4">{news.description}</p>

              <a
                href=""
                className="flex items-center gap-2 text-sm mt-3 text-blue-600"
              >
                Read More <FaLongArrowAltRight />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentNews;
