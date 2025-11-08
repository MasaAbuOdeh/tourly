import React, { useState } from "react";

const AddTourForm = () => {
  const [tourData, setTourData] = useState({
    title: "",
    destination: "",
    price: "",
    description: "",
    images: null,
    date: "",
  });

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setTourData((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(tourData);
    try {
      const formData = new FormData();
      formData.append("title", tourData.title);
      formData.append("destination", tourData.destination);
      formData.append("price", tourData.price);
      formData.append("description", tourData.description);
      formData.append("date", tourData.date);

      if (tourData.images) {
        for (let i = 0; i < tourData.images.length; i++) {
          formData.append("images", tourData.images[i]);
        }
      }

      const res = await fetch("http://localhost:3000/api/tours/addTour", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert("Tour added successfully!");
        console.log("Response:", data);
        setTourData({
          title: "",
          destination: "",
          price: "",
          description: "",
          images: null,
          date: "",
        });
      } else {
        alert(data.message || "Failed to add tour");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };
  return (
    <div className="w-1/2 p-10 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Add New Tour</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Tour Title */}
        <input
          type="text"
          name="title"
          placeholder="Tour Title"
          value={tourData.title}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />

        {/* Tour Destination */}
        <input
          type="text"
          name="destination"
          placeholder="Tour Destination"
          value={tourData.destination}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />

        {/* Tour Price */}
        <input
          type="number"
          name="price"
          placeholder="Tour Price"
          value={tourData.price}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />

        {/* Tour Description */}
        <textarea
          name="description"
          placeholder="Tour Description"
          value={tourData.description}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          rows="3"
          required
        ></textarea>

        {/* Upload Tour Images */}
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 file:cursor-pointer"
        />

        {/* Tour Date */}
        <input
          type="date"
          name="date"
          value={tourData.date}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#FF6B35] text-white py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTourForm;
