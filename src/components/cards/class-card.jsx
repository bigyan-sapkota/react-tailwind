import React from "react";

const ClassCard = ({ item }) => {
  return (
    <div>
      <img
        src={`/home/${item.image}`}
        alt={item.title}
        className="h-60 w-full object-cover rounded-tl-2xl rounded-tr-2xl"
      />

      <div className="border border-gray-200 border-t-4 border-t-blue-600 rounded-bl-2xl rounded-br-2xl px-4 py-6">
        <h4 className="text-xl font-semibold">{item.title}</h4>
        <p className="my-2.5 text-sm text-gray-600">{item.schedule}</p>

        {/* lecturer and price */}
        <div className="flex justify-between items-center pt-1">
          <div className="flex gap-2 items-center">
            <img
              src={`/profiles/${item.profileImage}`}
              alt="professor"
              className="size-6 rounded-full object-cover"
            />
            <p className="text-sm">{item.instructor}</p>
          </div>

          <h5 className="font-bold text-blue-800">${item.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
