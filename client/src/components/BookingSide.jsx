import React from "react";
import BookingFeatures from "./BookingFeatures";
import BookingForm from "./BookingForm";
import { CreateBooking } from "../api/booking";

const BookingSide = ({ Features, price, tourId }) => {
  console.log(tourId);
  const handleBooking = (formData) => {
    const res = CreateBooking(
      formData.name,
      formData.phone,
      tourId,
      formData.guest
    );
    console.log(formData.guest);
    if (!res.ok) {throw new Error("can't Add booking");}
    alert(res.message);
    console.log(res.data);
  };
  return (
    <aside className="flex flex-col bg-[#FEF9F9] border-black border-1 rounded-2xl mt-40 w-[600px] mb-20">
      <h1 className="text-left text-[18px] sm:text-[20px] md:text-xl xl:text-2xl font-bold text-gray-800 mb-1 mt-5 ml-5">
        {price}$ /per person
      </h1>
      <BookingFeatures features={Features} />
      <BookingForm onSubmit={handleBooking} price={price} />
    </aside>
  );
};

export default BookingSide;
