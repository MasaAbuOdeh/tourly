import React, { useState } from "react";
import InteractiveStarRating from "./InteractiveStarRating";
import ReviewForm from "./ReviewForm";
import CommentsList from "./commentsList";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([
    {
      userName: "Ahmad",
      date: "10-5-2025",
      comment: "good !!",
      rate: 4,
    },
    {
      userName: "Masa",
      date: "20-8-2025",
      comment: "Amazing tour !!",
      rate: 3,
    },
    {
      userName: "Lana",
      date: "16-10-2025",
      comment: "I enjoyed !!",
      rate: 5,
    },
  ]);
  const handleSubmit=(text)=>{
    const newComment={
        userName:"Rama",
        date:"15-2-2030",
        comment: text,
        rate:rating,
    }
    setComments([newComment,...comments])

  }
  console.log(`after select rating ${rating}`);
  return (
    <div className="flex flex-col bg-[#FEF9F9] border-black border-1 rounded-2xl mt-10 ml-15 max-h-[750px] max-w-[300px] sm:max-w-[220px] md:max-w-[420px] lg:max-w-[620px] xl:max-w-[700px] mb-20 overflow-y-auto scrollbar-thin ">
      <h1 className="text-left text-[18px] sm:text-[20px] md:text-xl xl:text-2xl font-bold text-gray-800 mb-1 mt-5 ml-5">
        {" "}
        Reviews
      </h1>
      <InteractiveStarRating onRatingSelect={setRating} />
      <ReviewForm
        onSubmit={handleSubmit}
      />
      {comments.map((reviwe, i) => (
        <CommentsList review={reviwe} key={i} />
      ))}
    </div>
  );
};

export default Reviews;
