import React from "react";

const UserPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome User</h2>
      <h3>Book Your Ticket</h3>
      <form>
        <label>Flight Number:</label>
        <input type="text" placeholder="Enter flight number" /><br /><br />
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" /><br /><br />
        <label>Passengers:</label>
        <input type="number" placeholder="No. of passengers" /><br /><br />
        <button type="button">Book Ticket</button>
      </form>
    </div>
  );
};

export default UserPage;
