import React from "react";

const GuestPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome Guest</h2>
      <h3>Available Flights</h3>
      <ul>
        <li>Flight A - Delhi to Mumbai - ₹4500</li>
        <li>Flight B - Mumbai to Bangalore - ₹5000</li>
        <li>Flight C - Delhi to Chennai - ₹5500</li>
      </ul>
      <p>Login to book your ticket.</p>
    </div>
  );
};

export default GuestPage;
