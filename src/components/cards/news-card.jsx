import React from "react";

import { FaLongArrowAltRight } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div>
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

      <p className="font-lg font-semibold pt-6 line-clamp-1">{news.title}</p>

      <p className="mt-4 line-clamp-2">{news.description}</p>

      <a href="" className="flex items-center gap-2 text-sm mt-3 text-blue-600">
        Read More <FaLongArrowAltRight />
      </a>
    </div>
  );
};

export default NewsCard;
