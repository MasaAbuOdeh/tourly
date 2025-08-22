import React, { useState } from "react";
import ToursHeader from "../components/ToursHeader";
import { Dropdown } from "../components/Dropdown";
import TripCard from "../components/TripCard";
import { useEffect } from "react";
import { getAllTours } from "../api/tours";

const Tours = () => {
  const [allTrips, setAllTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const data = await getAllTours(); // استدعاء الدالة الجاهزة
        setAllTrips(data);
        setFilteredTrips(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trips:", error);
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  const handleFilter = (newFilteredTrips) => {
    setFilteredTrips(newFilteredTrips);
  };

  if (loading) return <p className="text-center mt-10">Loading trips...</p>;
  return (
    <>
      <ToursHeader />
      <Dropdown onApplyFilter={handleFilter} allTrips={allTrips} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center gap-5 sm:gap-7 md:gap-10 xl:gap-5 mx-auto mb-20">
        {filteredTrips.map((trip, index) => (
          <TripCard key={index} {...trip} />
        ))}
      </div>
    </>
  );
};

export default Tours;
