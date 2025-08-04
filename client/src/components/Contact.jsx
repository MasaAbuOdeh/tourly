import React from "react";
import { assets } from "../assets/assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="bg-[#F0F4F8] w-[100%] h-auto rounded-xl overflow-hidden shadow-2xl mx-auto">
      <div className="flex flex-col justify-center text-center mx-auto my-4 ">
        <h1 className="text-2xl font-bold mb-1 text-center text-gray-800 mx-auto">
          Got questions or ideas?
        </h1>
        <h4 className="text-xl mb-10 text-center text-gray-500 mx-auto">
          Let’s Create your next adventure together!
        </h4>
        <button className="flex justify-center mx-auto px-4 py-1 text-sm font-medium border border-gray-300 text-white rounded bg-[#FF6B35] hover:bg-[#39B5CE] transition-all cursor-pointer">
          Contact Us now
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8 text-sm mt-[60px]">
        {/* العمود الأول */}
        <div className="ml-20 mt-[-10px]">
          <img
            src={assets.Tourly}
            alt="logo"
            className="w-24 h-24 rounded-md"
          />
          <p className="text-gray-600 text-sm leading-relaxed max-w-[300px] mt-[-5px] ml-5">
            Discover, book and experience the best trips with top-rated travel
            partners.
          </p>
          <div className="flex space-x-5 mt-4 ml-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6B35] hover:text-gray-800"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6B35] hover:text-gray-800"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6B35] hover:text-gray-800"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6B35] hover:text-gray-800"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* العمود الثاني */}
        <div className="mt-5 mx-auto">
          <h3 className="text-lg font-bold mb-2 text-[#F17228]">Quick Links</h3>
          <ul className="space-y-2 text-gray-500">
            <li><a href="/">About Us</a></li>
            <li><a href="/rooms">Tours</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* العمود الثالث */}
        <div className="mt-5 ml-30">
          <h3 className="text-lg font-bold mb-2 text-[#F17228]">
            Get in Touch
          </h3>
          <p className="text-gray-500 mb-1">Nablus, Rafidia St.</p>
          <p className="text-gray-500 mb-1">tourlycontact@gmail.com</p>
          <p className="text-gray-500">+970 598 123456</p>
        </div>
      </div>
      <div className="text-center text-gray-700 text-xs mt-10 mb-5">
    &copy; Copyright 2025 Tourly Travel and Tour. All Rights Reserved.
  </div>
    </footer>
  );
};

export default Contact;
