import React from "react";
import { FaUser, FaStar } from "react-icons/fa";

const CommentIlement = ({ userName, comment, date, rate }) => {
  return (
    <div className="flex justify-between ">
        <div className="flex flex-start ">
            <FaUser className="text-3xl text-black ml-5 mt-5"/>
            <div className="flex flex-col mt-5 ml-5 text-gray-500">
                <h3 className="text-2xl">{userName}</h3>
                <h4 className="text-lg mt-0">{date}</h4>
                <h2 className="text-3xl mt-3">{comment}</h2>
            </div>
        </div>
        <div className="flex gap-2 mr-10 mt-5">
            <FaStar className="text-[#f59e0b]"/>
            <h4>{rate}</h4>
        </div>

    </div>
  );
};

export default CommentIlement;
