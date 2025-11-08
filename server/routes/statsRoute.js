import express from "express";
import { getStats } from "../controllers/statsController.js";
const statsRoute = express.Router();

statsRoute.get("/stats", getStats);
export default statsRoute;
