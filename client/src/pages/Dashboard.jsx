import React from 'react'
import CardAdmin from '../components/CardAdmin'
import RecentBookings from '../components/RecentBookings'
const Dashboard = () => {
  return (
    <div className="p-8 w-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span>👤 Masa</span>
          <button className="bg-[#00798C] hover:opacity-70 text-white px-4 py-2 rounded">Logout</button>
        </div>
      </div>

      <p className="text-gray-600 max-w-xl mb-8">
        Welcome to your admin dashboard. This is your central control panel for managing all aspects of the travel booking platform...
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <CardAdmin label="total Tours" value="5" />
        <CardAdmin label="total Users" value="100" />
        <CardAdmin label="total Bookings" value="10" />
      </div>

      <RecentBookings />
    </div>
  )
}

export default Dashboard