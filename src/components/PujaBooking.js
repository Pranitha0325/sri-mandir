import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const PujaBooking = () => (
  <div className="puja-booking-section">
    <h1>No Puja has been booked yet</h1>
    <h2>
      Book your Puja online at Popular Temples of India. Panditji will take
      sankalp with your name and gotra during the Puja
    </h2>
    <div>
      <Link to="/">Book Pooja Now</Link>
    </div>
  </div>
);

export default PujaBooking;
