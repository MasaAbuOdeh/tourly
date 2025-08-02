import React, { useState } from "react";
import { assets } from "../assets/assets";

export const ImagesSlider = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative top-25 h-[400px] max-w-[90%] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px] mx-auto">
      {/* Main Image */}
      <div className="w-full h-[400px] overflow-hidden rounded-xl">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black opacity-60 text-white text-xl px-3 py-1 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black opacity-60 text-white text-xl px-3 py-1 rounded-full"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};
