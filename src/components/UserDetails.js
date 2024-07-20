import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const UserDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    gotra: "",
    noGotra: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    console.log(formData);
  };

  return (
    <div className="main-puja-container">
      <div className="puja-form-container">
        <h1>Sri Mandir Puja Seva</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h1>Enter Your Whatsapp Mobile Number</h1>
            <p>
              Your Puja booking updates like Puja Photos, Videos and other
              details will be sent on WhatsApp on below number.
            </p>
            <label>Your Mobile Number</label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Proceed to book</button>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
