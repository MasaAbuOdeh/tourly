import React, { useState } from "react";

export const Dropdown = ({ onApplyFilter, allTrips }) => {
  const [filters, setFilters] = useState({
    destination: "",
    priceRange: "",
    rating: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilter = () => {
    console.log("filters at apply:", filters);
    let filtered = allTrips;

    if (filters.destination) {
      filtered = filtered.filter((trip) =>
        trip.location.includes(filters.destination)
      );
    }

    if (filters.priceRange) {
      if (filters.priceRange === "0-100") {
        filtered = filtered.filter((trip) => trip.price <= 100);
      } else if (filters.priceRange === "100-300") {
        filtered = filtered.filter(
          (trip) => trip.price > 100 && trip.price <= 300
        );
      } else if (filters.priceRange === "300+") {
        filtered = filtered.filter((trip) => trip.price > 300);
      }
    }

    if (filters.rating) {
      filtered = filtered.filter((trip) => {
        console.log(
          "Trip Rating:",
          trip.rating,
          "Filter Rating:",
          filters.rating
        );
        return trip.rating >= Number(filters.rating);
      });
    }

    onApplyFilter(filtered);
  };

  return (
    <div className="bg-[#FFFFFF] border-2 border-gray-300 mb-20 mt-27 p-4 rounded-lg overflow-hidden shadow-2xl flex flex-wrap justify-center gap-4 mb-8 mx-auto w-fit max-w-[400px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1000px] ">
      <select
        name="destination"
        className="p-2 rounded-md text-sm text-gray-600 border border-gray-300 focus:outline-none"
        onChange={handleChange}
      >
        <option value="">Destination</option>
        <option>Istanbul</option>
        <option>Bali</option>
        <option>London</option>
      </select>

      <select
        name="priceRange"
        className="p-2 rounded-md text-sm text-gray-600 border border-gray-300 focus:outline-none"
        onChange={handleChange}
      >
        <option value="">Price Range</option>
        <option value={"0-100"}>0-100$</option>
        <option value={"100-300"}>100$-300$</option>
        <option value={"+300"}>300$+</option>
      </select>

      <select
        name="rating"
        className="p-2 rounded-md text-sm text-gray-600 border border-gray-300 focus:outline-none"
        onChange={handleChange}
      >
        <option value="">Rating</option>
        <option value="1">1+ Stars</option>
        <option value="3">3+ Stars</option>
        <option value="5">5 Stars</option>
      </select>

      {/* Apply Filter Button */}
      <button
        className="bg-[#FF6B35] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition cursor-pointer"
        onClick={applyFilter}
      >
        Apply Filter
      </button>
    </div>
  );
};
