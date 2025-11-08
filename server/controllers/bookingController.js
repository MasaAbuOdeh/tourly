import Booking from "../models/booking.js";
import Tour from "../models/tour.js";

export const createBooking = async (req, res) => {
  const { name, phone, tourId, guests } = req.body;
  try {
    const userId = req.user.id;
    console.log(tourId);
    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res.status(404).json({ message: "tour did not found" });
    }
    const totalPrice = tour.price * guests;
    console.log("this is the name " + name);
    const newBooking = new Booking({
      user: userId,
      tour: tourId,
      name,
      phone,
      guests,
      totalPrice,
    });
    await newBooking.save();
    res
      .status(201)
      .json({ message: "Booking seved successfully", data: newBooking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllUserBookings = async (req, res) => {
  const userId = req.user.id;
  try {
    const userBooking = await Booking.find({ user: userId });
    if (!userBooking) {
      res.status(404).json({ message: "booking not found" });
      return;
    }
    res.status(201).json({ message: "all user bookings", data: userBooking });
  } catch (err) {
    res.status(500).json({ message: "something wrong!" });
  }
};

export const getAllBookingdAdmin = async (req, res) => {
  try {
    const Bookings = await Booking.find()
      .populate("user", "username")
      .populate("tour", "title");

    if (!Bookings) {
      res.status(404).json({ message: "No bookings to show" });
      return;
    }
    res.status(201).json({ message: "bookings found", data: Bookings });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateBooking = async (req, res) => {
  const BookingId = req.params.id;
  const userId = req.user.id;
  //const {name,phone,guests,status}=req.body;
  try {
    const userBooking = await Booking.findById(BookingId);
    if (!userBooking) {
      res.status(404).json({ message: "No bookings Found" });
      return;
    }
    if (userBooking.user.toString() !== userId) {
      res
        .status(403)
        .json({ message: "Not Authorized to update this booking" });
      return;
    }
    Object.keys(req.body).forEach((key) => {
      userBooking[key] = req.body[key];
    });

    const updatedBookings = await userBooking.save();

    res
      .status(201)
      .json({ message: "booking updated successfully", data: updatedBookings });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
