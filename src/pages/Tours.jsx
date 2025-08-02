import React, { useState } from "react";
import ToursHeader from "../components/ToursHeader";
import { Dropdown } from "../components/Dropdown";
import TripCard from "../components/TripCard";
import allTrips from "../data/trips";

const Tours = () => {
  const [filteredTrips, setFilteredTrips] = useState(allTrips);
  const handleFilter = (newFilteredTrips) => {
    setFilteredTrips(newFilteredTrips);
  };
  return (
    <>
      <ToursHeader />
      <Dropdown onApplyFilter={handleFilter} allTrips={allTrips} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center gap-5 sm:gap-7 md:gap-10 xl:gap-5 mx-auto mb-20">
        {filteredTrips.map((trip) => (
          <TripCard key={trip.id} {...trip} />
        ))}
      </div>
    </>
  );
};

export default Tours;
