import React from "react";
import {
  FaTachometerAlt,
  FaPlusCircle,
  FaList,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-white w-64 h-screen shadow-md p-5">
      <Link to="/">
        <img
          src={assets.Tourly}
          alt="logo"
          className={`w-32 h-32 p-2 rounded-md `}
        />
      </Link>

      <ul className="px-5 space-y-6">
        <Link to="/admin/dashboard">
          <li className="py-5 flex items-center gap-3 font-medium text-gray-700 hover:text-teal-700 cursor-pointer">
            <FaTachometerAlt /> Dashboard
          </li>
        </Link>
        <Link to="/admin/AddTour">
          <li className="py-5 flex items-center gap-3 font-medium text-gray-700 hover:text-teal-700 cursor-pointer">
            <FaPlusCircle /> Add Tour
          </li>
        </Link>
        <Link to="/admin/ListTours">
        <li className="py-5 flex items-center gap-3 font-medium text-gray-700 hover:text-teal-700 cursor-pointer">
          <FaList /> List Tours
        </li>
        </Link>
      </ul>

      <div className="absolute bottom-8 left-5 flex items-center gap-3 text-gray-600">
        <FaUser />
        <span>Masa</span>
        <FaSignOutAlt className="ml-auto cursor-pointer text-red-500 hover:text-red-700" />
      </div>
    </div>
  );
};

export default Sidebar;
