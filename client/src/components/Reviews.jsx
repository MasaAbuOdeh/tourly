import { useState, useEffect } from "react";
import InteractiveStarRating from "./InteractiveStarRating";
import ReviewForm from "./ReviewForm";
import CommentsList from "./commentsList";

const Reviews = ({ tourId }) => {
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all reviews for this tour
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/tours/${tourId}/reviews`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch reviews");
        setComments(data.reviews || []);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [tourId]);

  // Update comments after new review is added
  const handleReviewAdded = (newReview) => {
    setComments([newReview, ...comments]);
  };

  if (loading) return <p className="ml-5 mt-3 text-gray-600">Loading reviews...</p>;

  return (
    <div className="flex flex-col bg-[#FEF9F9] border-black border-1 rounded-2xl mt-10 ml-15 max-h-[750px] max-w-[300px] sm:max-w-[220px] md:max-w-[420px] lg:max-w-[620px] xl:max-w-[700px] mb-20 overflow-y-auto scrollbar-thin p-5">
      <h1 className="text-left text-[18px] sm:text-[20px] md:text-xl xl:text-2xl font-bold text-gray-800 mb-3">
        Reviews
      </h1>

      <InteractiveStarRating onRatingSelect={setRating} rating={rating} />

      <ReviewForm
        tourId={tourId}
        rating={rating}
        setRating={setRating}
        onReviewAdded={handleReviewAdded}
      />

      {comments.length === 0 && <p className="text-gray-600">No reviews yet.</p>}

      {comments.map((review, i) => (
        <CommentsList review={review} key={i} />
      ))}
    </div>
  );
};

export default Reviews;
