import React, { useState } from "react";
import InteractiveStarRating from "./InteractiveStarRating";

const ReviewForm = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [Rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return alert("Please complete your review");
    onSubmit(text);
    setText("");
    console.log(text)
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between mt-5 ml-5 p-6 border-1 border-[#FF6B35] rounded-xl shadow-md w-full max-w-2xl mb-5"
    >
      <input
        placeholder="share your thoughts"
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="w-full border border-gray-300 rounded p-2 mb-4 border-none focus:outline-none"
        value={text}
      />
      <button
        type="submit"
        className="bg-[#FF6B35] text-white px-4 py-2 rounded hover:bg-orange-600 transition"
      >
        SUbmit
      </button>
    </form>
  );
};

export default ReviewForm;
