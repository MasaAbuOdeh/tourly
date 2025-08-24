import express from "express";
import {
  CreateTour,
  getAllTours,
  getTour,
  updateTour,
  deleteTour,
} from "../controllers/tourController.js";
import { verifyAdmin, verifyToken } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";

const tourRoute = express.Router();

tourRoute.post(
  "/addTour",
  verifyToken,
  verifyAdmin,
  upload.array("images"),
  CreateTour
);
tourRoute.get("/getTours", getAllTours);
tourRoute.get("/getTour/:id", getTour);
tourRoute.put(
  "/updateTour/:id",
  verifyToken,
  verifyAdmin,
  upload.array("images"),
  updateTour,
);
tourRoute.delete("/deleteTour/:id", verifyToken, verifyAdmin, deleteTour);

export default tourRoute;
