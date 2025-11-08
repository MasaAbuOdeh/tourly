import express from "express";
import { getReviews,addReview } from "../controllers/reviewController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const reviewRouter = express.Router();

reviewRouter.post("/tours/:tourId/review", verifyToken, addReview);
reviewRouter.get("/tours/:tourId/reviews", getReviews);

export default reviewRouter;
