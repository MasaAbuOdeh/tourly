import React, { useEffect, useState } from "react";
import CardAdmin from "../components/CardAdmin";
import RecentBookings from "../components/RecentBookings";
import { getStats } from "../api/stats";
const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, tours: 0, bookings: 0 });
   useEffect(() => {
    getStats().then((data) => {
      if (data) setStats(data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <div className="p-8 w-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span>👤 Masa</span>
          <button
            onClick={handleLogout}
            className="bg-[#00798C] hover:opacity-70 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      <p className="text-gray-600 max-w-xl mb-8">
        Welcome to your admin dashboard. This is your central control panel for
        managing all aspects of the travel booking platform...
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <CardAdmin label="total Tours" value={stats.tours} />
        <CardAdmin label="total Users" value={stats.users} />
        <CardAdmin label="total Bookings" value={stats.bookings} />
      </div>

      <RecentBookings />
    </div>
  );
};

export default Dashboard;
