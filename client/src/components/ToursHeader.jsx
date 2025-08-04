import React from "react";
import { assets } from "../assets/assets";

const ToursHeader = () => {
  return (
    <div className="relative h-[350px] top-20 rounded-2xl overflow-hidden shadow-2xl w-auto mb-10">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-5"
        src="/src/assets/plan1.jpg"
        alt="tours"
      />
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24 xl:px-32 text-white  ">
        <h1 className="text-4xl text-xl sm:text-3xl md:text-5xl xl:text-5xl font-bold mb-4 ">
          Explore All our Trips
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover diverse destinations around <br/> 
          the world, handpicked for every traveler.
        </p>
      </div>
    </div>
  );
};

export default ToursHeader;
