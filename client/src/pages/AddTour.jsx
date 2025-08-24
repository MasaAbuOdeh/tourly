import React from "react";
import LoginSlide from "../components/LoginSlide";
import AddTourForm from "../components/AddTourForm";

const AddTour = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white shadow-lg rounded-2xl flex w-[900px] max-w-full overflow-hidden">
        <LoginSlide />
        <AddTourForm />
      </div>
    </div>
  );
};

export default AddTour;
