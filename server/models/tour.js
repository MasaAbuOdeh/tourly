import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    destination: { type: String, required: true },
    price: { type: Number, required: true },
    rate: { type: Number },
    comments: [
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    username: { type: String }, // نخزن اسم اليوزر عشان ما نحتاج جلبه كل مرة
    rate: { type: Number, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now },
  }
],
    description: { type: String },
    images: { type: [String], required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);
const Tour = mongoose.model("Tour", tourSchema);
export default Tour;
