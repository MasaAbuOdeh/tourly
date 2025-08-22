import React from "react";
import trips from "../data/trips";
import TripCard from "./TripCard";
import { data, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getAllTours } from "../api/tours";

const FeaturedTrips = () => {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);
  useEffect(() => {
    getAllTours().then((data) => {
      console.log(data);
      setTours(data);
    });
  }, []);
  return (
    <div className="py-10 px-0 max-w-[1200px] mx-auto ">
      <h2 className="text-2xl font-bold mb-1 text-center text-gray-800 mx-auto">
        Our Featured Trips
      </h2>
      <h4 className="text-xl mb-10 text-center text-gray-500 mx-auto">
        {" "}
        Explore your dream travel with tourly !
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-10 sm:gap-15 md:gap-20 xl:gap-50 mx-auto">
        {tours.slice(0, 4).map((trip,index) => (
          <TripCard key={index} {...trip} />
        ))}
      </div>
      <Link to="/tours">
        <button className="flex justify-center mx-auto my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-[#F0F4F8] hover:bg-[#39B5CE] transition-all cursor-pointer">
          view more trips
        </button>
      </Link>
    </div>
  );
};

export default FeaturedTrips;
