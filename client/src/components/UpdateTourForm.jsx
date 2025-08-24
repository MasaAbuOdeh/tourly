import React, { useState, useEffect } from "react";

const UpdateTourForm = ({ tourId }) => {
  console.log(tourId);
  const [tourData, setTourData] = useState({
    title: "",
    destination: "",
    price: "",
    description: "",
    images: [],
    date: "",
  });

  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/tours/getTour/${tourId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        setTourData({
          title: data.title,
          destination: data.destination,
          price: data.price,
          description: data.description,
          images: data.images || [],
          date: data.date,
        });
      } catch (err) {
        console.log("Error fetching tour data");
      }
    };
    fetchTour();
  }, []);

  // دالة لتحديث القيم
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setTourData((prev) => ({
      ...prev,
      [name]: files ? Array.from(files) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // فقط أضف الحقول التي تم تعديلها
    if (tourData.title) formData.append("title", tourData.title);
    if (tourData.destination)
      formData.append("destination", tourData.destination);
    if (tourData.price) formData.append("price", tourData.price);
    if (tourData.description)
      formData.append("description", tourData.description);
    if (tourData.date) formData.append("date", tourData.date);

    // إضافة الصور فقط إذا كانت موجودة
    if (tourData.images.length > 0) {
      tourData.images.forEach((file) => {
        formData.append("images", file);
      });
    }

    try {
      const res = await fetch(
        `http://localhost:3000/api/tours/updateTour/${tourId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: "PUT",
          body: formData,
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("Tour Updated successfully!");
        console.log("Response:", data);
      } else {
        alert(data.message || "Failed to Update tour");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };
  return (
    <div className="w-1/2 p-10 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Update Tour</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Tour Title */}
        <input
          type="text"
          name="title"
          placeholder="Tour Title"
          value={tourData.title}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />

        {/* Tour Destination */}
        <input
          type="text"
          name="destination"
          placeholder="Tour Destination"
          value={tourData.destination}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />

        {/* Tour Price */}
        <input
          type="number"
          name="price"
          placeholder="Tour Price"
          value={tourData.price}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />

        {/* Tour Description */}
        <textarea
          name="description"
          placeholder="Tour Description"
          value={tourData.description}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          rows="3"
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
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#FF6B35] text-white py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTourForm;
