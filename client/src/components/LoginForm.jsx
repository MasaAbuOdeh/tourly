import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const hideLayout = location.pathname === "/register";
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || "register failed");
      }
      alert("Register Successfully");
      window.location.href = "/login";
    } catch (err) {
      alert(err.message);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // حفظ التوكن
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.username);

      alert("Login successful!");
      // redirect
      if (data.user.role == "user") {
        window.location.href = "/";
      } else window.location.href = "/admin/dashboard";
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="w-1/2 p-10 flex flex-col justify-center">
      {!hideLayout ? (
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
      ) : (
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Register</h2>
      )}

      <form onSubmit={!hideLayout ? handleLogin : handleSignUp}>
        {/* Name */}
        {hideLayout && (
          <input
            type="name"
            placeholder="userName"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
              console.log(username);
            }}
            className=" w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
          className=" w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password min 8 characters"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
          className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Login Button */}
        {!hideLayout ? (
          <button className="w-full bg-[#00798C] text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
            Login
          </button>
        ) : (
          <button className="w-full bg-[#00798C] text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
            Register
          </button>
        )}
      </form>

      {/* Register redirect */}
      {!hideLayout ? (
        <p className="mt-4 text-sm text-gray-600">
          Not registered yet?{" "}
          <Link
            to="/register"
            className="text-orange-500 font-medium hover:underline"
          >
            Create Account Now
          </Link>
        </p>
      ) : (
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-medium hover:underline"
          >
            sign in Now
          </Link>
        </p>
      )}

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">OR</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Google Login */}
      {!hideLayout ? (
        <button className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-100 transition">
          <FcGoogle size={22} />
          <span className="font-medium">Login with Google</span>
        </button>
      ) : (
        <button className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-100 transition">
          <FcGoogle size={22} />
          <span className="font-medium">Sign Up with Google</span>
        </button>
      )}
    </div>
  );
};

export default LoginForm;
