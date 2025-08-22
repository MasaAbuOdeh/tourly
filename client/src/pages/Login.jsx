import React from "react";
import LoginForm from "../components/LoginForm";
import { assets } from "../assets/assets";
import LoginSlide from "../components/LoginSlide";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl flex w-[900px] max-w-full overflow-hidden">
        <LoginForm />
        <LoginSlide />
      </div>
    </div>
  );
};

export default Login;
