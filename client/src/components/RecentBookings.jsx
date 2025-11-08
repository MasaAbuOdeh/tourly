import React, { useEffect, useState } from "react";
import { getBookingsToAdmin } from "../api/booking";

const RecentBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    getBookingsToAdmin().then((data) => {
      console.log(data);
      setBookings(data);
    });
  }, [bookings]);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">User Name</th>
            <th className="p-2 border">Booking name</th>
            <th className="p-2 border">Tour</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Guests</th>
            <th className="p-2 border">TotalPrice</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, idx) => (
            <tr key={idx} className="text-center">
              <td className="p-2 border">{b.user.username}</td>
              <td className="p-2 border">{b.name}</td>
              <td className="p-2 border">{b.tour.title}</td>
              <td className="p-2 border">{b.phone}</td>
              <td className="p-2 border">{b.guests}</td>
              <td className="p-2 border">{b.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentBookings;
