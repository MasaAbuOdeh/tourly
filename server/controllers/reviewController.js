import Tour from "../models/tour.js";
import User from "../models/User.js";
import Booking from "../models/booking.js";

export const addReview = async (req, res) => {
  const { tourId } = req.params;
  const { comment, rate } = req.body;
  const userId = req.user.id;

  try {
    const hasBooking = await Booking.findOne({ tour: tourId, user: userId });
    if (!hasBooking) {
      return res
        .status(403)
        .json({ message: "You need to book this tour first to review it." });
    }

    const tour = await Tour.findById(tourId);
    if (!tour) return res.status(404).json({ message: "Tour not found" });

    const user = await User.findById(userId);

    const newReview = {
      user: user._id,
      username: user.username,
      rate,
      comment,
    };

    tour.comments.push(newReview);

    tour.rate =
      tour.comments.reduce((acc, item) => acc + item.rate, 0) /
      tour.comments.length;

    await tour.save();
    res.status(201).json({ message: "Review added", review: newReview });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all reviews for a tour
export const getReviews = async (req, res) => {
  const { tourId } = req.params;

  try {
    const tour = await Tour.findById(tourId).select("comments title rate"); 
    if (!tour) return res.status(404).json({ message: "Tour not found" });

    res.status(200).json({
      tourId: tour._id,
      title: tour.title,
      rate: tour.rate,
      reviews: tour.comments,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};