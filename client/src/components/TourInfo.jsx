import React from "react";
import StarRating from "./StarRating";
import { FaMapMarkerAlt, FaRegCalendar } from "react-icons/fa";

const TourInfo = ({ title, location, rating, price, date, description }) => {
  return (
    <div className="relative overflow-hidden flex flex-col bg-[#FEF9F9] border-black border-1 rounded-2xl mt-40 ml-15 h-[500px] xl:h-auto max-w-[300px] sm:max-w-[220px] md:max-w-[420px] lg:max-w-[620px] xl:max-w-[700px]">
      <div className="relative flex gap-5 mb-1">
        <h2 className="text-left text-[18px] sm:text-[20px] md:text-xl xl:text-2xl font-bold text-gray-800 mb-1 mt-5 ml-5">
          {title}
        </h2>
        <StarRating rating={rating} />
        <h3 className="mt-7 font-medium">{rating}</h3>
      </div>
      <div className="relative flex justify-start gap-20 sm:gap-30 md:gap-45 xl:gap-55">
        <h1 className="text-left text-2xl font-medium text-[#6C6464] mb-1 mt-5 ml-5">
          {price}$/Per Person
        </h1>
        <div className="flex items-center gap-1 text-gray-500">
          <FaMapMarkerAlt className="mt-5 text-orange-500" />
          <h1 className="text-left text-[25px] sm:text-[32px] md:text-xl xl:text-2xl font-medium text-[#6C6464] mb-1 mt-5 ">
            {location}
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-1 text-gray-500">
        <FaRegCalendar className="ml-5 mt-5 text-orange-500" />
        <h1 className="text-left text-2xl font-medium text-[#6C6464] mb-1 mt-5 ml-2">
          {date}
        </h1>
      </div>
      <div className="flex items-center  text-[16px] sm:text-xl md:text-2xl xl:text-3xl gap-1 text-gray-500 ml-5 mt-5">
        <p className="leading-6 sm:leading-8 md:leading-9 xl:leading-10 mb-6">{description}</p>
      </div>
    </div>
  );
};

export default TourInfo;
