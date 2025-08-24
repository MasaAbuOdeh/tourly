import React from "react";
import LoginSlide from "../components/LoginSlide";
import { useParams } from "react-router-dom";
import UpdateTourForm from "../components/UpdateTourForm";

const UpdateTour = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white shadow-lg rounded-2xl flex w-[900px] max-w-full overflow-hidden">
        <LoginSlide />
        <UpdateTourForm tourId={id} />
      </div>
    </div>
  );
};

export default UpdateTour;
