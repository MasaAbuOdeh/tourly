import { React, useEffect, useState } from "react";
import { DeleteTour, getAllTours } from "../api/tours";
import { useNavigate } from "react-router-dom";

const ToursTable = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await getAllTours();
        console.log(res);
        setTours(res);
      } catch (err) {
        console.log("Error when get tours");
      }
    };
    fetchTours();
  }, []);
  const handleDelete = async (id) => {
    try {
      const tourDeleted = await DeleteTour(id, token);
      alert(tourDeleted.message);
      setTours((prev) => prev.filter((tour) => tour._id !== id));
    } catch (err) {
      alert("something went wrong");
    }
  };
  const handleEdit = (id) => {
    navigate(`/admin/updateTour/${id}`);
  };
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Tours list</h2>
      <div className="overflow-y-auto scrollbar-thin h-[350px]">
        <table className="w-full border slider">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Tour</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Update</th>
              <th className="p-2 border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour, idx) => (
              <tr key={idx} className="text-center">
                <td className="p-2 border">{tour.title}</td>
                <td className="p-2 border">{tour.price}</td>
                <td className="p-2 border">
                  {new Date(tour.date).toLocaleDateString("en-GB")}
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleEdit(tour._id)}
                    className="bg-[#FF6B35] text-white px-4 py-2 rounded-full hover:opacity-70"
                  >
                    Edit
                  </button>
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(tour._id)}
                    className="bg-[#00798C] text-white px-4 py-2 rounded-full hover:opacity-70"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToursTable;
