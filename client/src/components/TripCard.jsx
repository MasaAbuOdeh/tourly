import React from "react";
import { Link } from "react-router-dom";

const TripCard = ({ _id, images, title, location, date, rate, price }) => {
  const formatDate = new Date(date).toLocaleDateString("en-GB");
  return (
    <div className="bg-[#F0F4F8] overflow-hidden shadow-2xl w-[320px] rounded-xl flex flex-col hover:translate-y-1 hover:shadow-lg">
      {/* صورة الرحلة */}{" "}
      <img
        src={images[0]}
        alt={title}
        className="w-full h-[180px] object-cover"
      />
      {/* محتوى البطاقة */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        {/* عنوان الرحلة */}
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
          <div className="flex items-center gap-1 text-sm ">
            <span className="text-yellow-400 text-base">★</span>
            <span>{rate}</span>
          </div>
        </div>
        {/* الموقع والتاريخ */}
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm text-gray-500 mb-2">{formatDate}</p>
        {/* الزر */}
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{`${price}$`}</h3>
          <div className="flex items-center gap-1 text-sm ">
            <Link to={`/tours/${_id}`}>
              <button className=" justify-end w-[160px] bg-[#3BBAC6] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#2fa3af] transition-all cursor-pointer">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
