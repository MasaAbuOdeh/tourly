import React, { useState } from "react";

const BookingForm = ({ onSubmit, price }) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guest: 1,
  });
  const handleOnChang = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      phone: "",
      guest: 1,
    });
    setTotalPrice(price);
  };
  return (
    <div className="flex flex-col mt-15">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 ml-5 text-2xl"
      >
        <label>Name</label>
        <input
          type="text"
          className="max-auto border-1 mt-1 bg-white mb-2 border-gray-500 outline-nne rounded py-2.5 px-3 mr-10"
          name="name"
          value={formData.name}
          onChange={handleOnChang}
          required
        ></input>
        <label>Phone</label>
        <input
          type="text"
          className="max-auto border-1 mt-1 bg-white mb-2 border-gray-500 outline-nne rounded py-2.5 px-3 mr-10"
          name="phone"
          value={formData.phone}
          onChange={handleOnChang}
          required
        ></input>
        <label>Guests</label>
        <input
          type="number"
          className="max-auto border-1 mt-1 bg-white mb-2 border-gray-500 outline-nne rounded py-2.5 px-3 mr-10"
          name="guest"
          value={formData.guest}
          onChange={(e) => {
            handleOnChang(e);
            console.log(e.target.value);
            setTotalPrice(e.target.value * price);
          }}
          required
          min={1}
        ></input>
        <div className="flex justify-between text-xl  text-gray-400 text-medium mr-10">
          <h4>{price}$ * person</h4>
          <h4>{price}$</h4>
        </div>
        <div className="flex justify-between text-xl text-medium mr-10">
          <h4>total</h4>
          <h4>{totalPrice}$</h4>
        </div>
        <div className="flex items-center justify-center w-full">
          <button
            type="submit"
            className="bg-[#00798C] text-white rounded text-2xl text-center max-auto justify-center mt-1 py-2 px-4 hover:opacity-70"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
