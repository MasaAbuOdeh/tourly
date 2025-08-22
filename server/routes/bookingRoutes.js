import express from "express";
import { verifyAdmin, verifyToken } from "../middleware/authMiddleware.js";
import {
  createBooking,
  getAllBookingdAdmin,
  getAllUserBookings,
  updateBooking,
} from "../controllers/bookingController.js";

const bookingRoutes = express.Router();

bookingRoutes.post("/createBooking", verifyToken, createBooking);
bookingRoutes.get("/getUserBookings", verifyToken, getAllUserBookings);
bookingRoutes.get(
  "/getBookingsAdmin",
  verifyToken,
  verifyAdmin,
  getAllBookingdAdmin
);
bookingRoutes.put("/updateBooking/:id", verifyToken, updateBooking);
export default bookingRoutes;
