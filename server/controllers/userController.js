import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingEmail = await User.findOne({ email });
    if (existingEmail)
      return res.status(400).json({ message: "this user already exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.log("error in registration", err);
    res.status(500).json({ message: "something went wrong" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (isPasswordCorrect) {
        const token = jwt.sign(
          { id: existingUser._id },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        return res.status(200).json({
          message: "Login successfully",
          token,
          user: {
            id: existingUser._id,
            username: existingUser.username,
            email: existingUser.email,
          },
        });
      }

      return res.status(400).json("wrong pass");
    }

    return res.status(400).json("this user does not exist");
  } catch (err) {
    console.log("the error is", err);

    return res.status(500).json("something went wrong");
  }
};
