import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < Math.floor(rating)) {
      // نجمة كاملة
      stars.push(<FaStar className="text-xl sm:text-2xl md:text-3xl xl:text-4xl" key={i} color="#f59e0b" />);
    } else if (i < rating) {
      // نجمة نصف
      stars.push(<FaStarHalfAlt className="text-xl sm:text-2xl md:text-3xl xl:text-4xl" key={i} color="#f59e0b" />);
    } else {
      // نجمة فاضية
      stars.push(<FaRegStar className="text-xl sm:text-2xl md:text-3xl xl:text-4xl" key={i} color="#d1d5db" />);
    }
  }

  return <div className="flex gap-1 mt-5 ml-[25px] sm:ml-[50px] md:ml-[100px] xl:ml-[200px] ">{stars}</div>;
};

export default StarRating;
