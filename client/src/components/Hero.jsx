import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[500px] top-20 rounded-2xl overflow-hidden shadow-2xl max-w-[90%] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto mb-10 ">
      <video
        src="/src/assets/HeroVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover bg-black opacity-85 z-5"
      />
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24 xl:px-32 text-white ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
          Discover Breathtaking
          <br /> Destinations!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Start your next adventure with us
        </p>
        <Link to="/tours">
          <button className="bg-[#FF6B35] text-white font-semibold py-2 px-6 rounded-full hover:opacity-70 transition-all duration-500">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
