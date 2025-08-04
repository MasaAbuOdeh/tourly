import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    destination: { type: String, required: true },
    price: { type: Number, required: true },
    rate: { type: Number },
    comments: [{ user: String, date: Date, comment: String }],
    description: { type: String },
    images: { type: [String], required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);
const Tour = mongoose.model("Tour", tourSchema);
export default Tour;
