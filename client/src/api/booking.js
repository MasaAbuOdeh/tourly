const API_URL = "http://localhost:3000/api/booking";

export const CreateBooking = async (name, phone, tourId, guests) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${API_URL}/createBooking`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name, phone, tourId, guests }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Booking added successfully!");
      console.log("Response:", data);
    } else {
      alert(data.message || "Failed to add Booking");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong!");
  }
};


