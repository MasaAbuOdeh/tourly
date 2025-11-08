import User from "../models/User.js";
import Tour from "../models/tour.js";
import Booking from "../models/booking.js";

export const getStats = async (req, res) => {
  try {
    const usersCount = await User.countDocuments();
    const toursCount = await Tour.countDocuments();
    const bookingsCount = await Booking.countDocuments();

    res.status(200).json({
      users: usersCount,
      tours: toursCount,
      bookings: bookingsCount,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }}