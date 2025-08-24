import React from "react";
import ToursTable from "../components/ToursTable";

const ListTours = () => {
  return (
    <div className="p-8 w-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">List Tours</h1>
      </div>
      <p className="text-gray-600 max-w-xl mb-8">
        The Tours List section in the Admin Panel allows administrators to
        efficiently manage all available tours on the platform. Through this
        interface, admins can view a complete list of tours with key details
        such as tour name, destination, price, and available dates. Each tour
        entry includes options to edit, update, or delete the tour information
        easily
      </p>
      <ToursTable/>
    </div>
  );
};

export default ListTours;
