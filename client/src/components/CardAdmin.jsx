import React from 'react'

const CardAdmin = ({ label, value }) => {
  return (
    <div className="bg-cyan-500 text-white text-center p-6 rounded-md w-full md:w-1/3">
      <p className="text-lg">{label}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  )
}

export default CardAdmin