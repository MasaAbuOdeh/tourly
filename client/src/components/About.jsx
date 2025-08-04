import React from "react";
import { assets } from "../assets/assets.js";

const About = () => {
  return (
    <section className=" xl:h-[400px] h-[90%] bg-[#F0F4F8] mt-30 py-16 px-6 md:px-20 rounded-xl overflow-hidden shadow-2xl max-w-[90%] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto mb-10">
      <h2 className="text-3xl font-bold text-[#3BBAC6] mb-4">Who we are?</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side - Text and illustration */}
        <div className=" md:w-1/2 flex flex-col md:flex-row items-center gap-2">
          <p className="text-gray-700 text-[16px] leading-7 mb-6">
            We are a platform that connects travelers with trusted tour
            companies, offering unforgettable experiences across the world. Our
            mission is to make trip booking simple, flexible, and exciting for
            every traveler.
          </p>
          <img
            src={assets.AboutTravel}
            alt="Traveler"
            className="w-[250px] mx-auto md:mx-0"
          />
        </div>

        {/* Right side - Features */}
        <div className="md:w-1/2 flex flex-col md:flex-row sm:flex-col gap-8 ml-20 mx-auto md:mx-0">
          <div className="flex items-center gap-4">
            <img
              src={assets.BookingIcon}
              alt="Easy Booking"
              className="w-10 h-10"
            />
            <h4 className="text-lg font-medium text-gray-800">Easy Booking</h4>
          </div>
          <div className="flex items-center gap-4">
            <img src={assets.TrustIcon} alt="Trusted" className="w-10 h-10" />
            <h4 className="text-lg font-medium text-gray-800">Trusted</h4>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={assets.SupportIcon}
              alt="24/7 Support"
              className="w-10 h-10"
            />
            <h4 className="text-lg font-medium text-gray-800">24/7 Support</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
