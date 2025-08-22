import React from "react";

const RecentBookings = () => {
  const bookings = [
    {
      name: "Masa",
      tour: "Istanbul",
      phone: "0599555",
      guests: 5,
      total: 35000,
    },
    { name: "Rana", tour: "Egypt", phone: "05984", guests: 3, total: 25000 },
    { name: "Nasem", tour: "Bali", phone: "05984", guests: 2, total: 30000 },
  ];
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Tour</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Guests</th>
            <th className="p-2 border">TotalPrice</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, idx) => (
            <tr key={idx} className="text-center">
              <td className="p-2 border">{b.name}</td>
              <td className="p-2 border">{b.tour}</td>
              <td className="p-2 border">{b.phone}</td>
              <td className="p-2 border">{b.guests}</td>
              <td className="p-2 border">{b.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentBookings;
