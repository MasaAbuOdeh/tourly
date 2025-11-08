import { useState } from "react";

const ReviewForm = ({ tourId, rating, setRating, onReviewAdded }) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to add a review");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/api/tours/${tourId}/review`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ comment, rate: rating }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to add review");

      if (onReviewAdded) onReviewAdded(data.review); // تحديث التعليقات في parent

      setComment("");
      setRating(5); // reset rating
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between mt-5 ml-5 p-6 border-1 border-[#FF6B35] rounded-xl shadow-md w-full max-w-2xl mb-5"
    >
      {error && <p className="text-red-500">{error}</p>}
      <input
        placeholder="share your thoughts"
        type="text"
        onChange={(e) => {
          setComment(e.target.value);
        }}
        className="w-full border border-gray-300 rounded p-2 mb-4 border-none focus:outline-none"
        value={comment}
        required
      />
      <button
        type="submit"
        className="bg-[#FF6B35] text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Add Review"}
      </button>
    </form>
  );
};

export default ReviewForm;
