import React from "react";
import CommentIlement from "./CommentIlement";

const CommentsList = ({ review }) => {
  return (
    <div className="flex flex-col mb-7">
      <CommentIlement
        userName={review.userName}
        date={review.date}
        comment={review.comment}
        rate={review.rate}
      />
    </div>
  );
};

export default CommentsList;
