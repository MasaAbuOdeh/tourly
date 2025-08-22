import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const verifyToken = async (req, res, next) => {
    console.log(req.user)
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "ما في توكن، الوصول مرفوض" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next(); // كمل للخطوة اللي بعده (مثلاً، createTour)
  } catch (err) {
    return res.status(403).json({ message: "توكن غير صالح" });
  }
};

export const verifyAdmin = (req, res, next) => {
    console.log(req.user);
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "ممنوع، فقط للمدراء" });
  }

  next();
};
