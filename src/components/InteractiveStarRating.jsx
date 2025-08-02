import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const InteractiveStarRating = ({onRatingSelect}) => {
  const totalStars = 5;
  const stars = [];
  const [StarRating, setStarRating] = useState(0);

  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <button
        onClick={() => {
          console.log(`"star number${i} clicked`);
          setStarRating(i + 1);
          onRatingSelect?.(i+1);
        }}
        key={i}
      >
        <FaStar
          className="text-xl sm:text-2xl md:text-3xl xl:text-4xl"
          color={i < StarRating ? "#f59e0b" : "#d1d5db"}
        />
      </button>
    );
  }

  return <div className="flex gap-1 ml-5 mt-5">{stars}</div>;
};

export default InteractiveStarRating;
