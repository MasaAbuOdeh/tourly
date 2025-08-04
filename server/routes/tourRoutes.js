import express from "express";
import { CreateTour } from "../controllers/tourController.js";

const tourRoute = express.Router();

tourRoute.post("/addTour", CreateTour);
export default tourRoute;
