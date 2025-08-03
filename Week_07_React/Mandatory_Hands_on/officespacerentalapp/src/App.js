import React from "react";

function App() {
  // --- Office Data ---
  const officeImage = "https://via.placeholder.com/300x200.png?text=Office+Space"; 

  const office = {
    name: "Prime Tower, MG Road",
    rent: 55000,
    address: "MG Road, Bengaluru"
  };

  const officeList = [
    { name: "IT Park Building", rent: 45000, address: "Whitefield, Bengaluru" },
    { name: "Tech Hub Plaza", rent: 75000, address: "Electronic City, Bengaluru" },
    { name: "Skyline Offices", rent: 60000, address: "HSR Layout, Bengaluru" }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Heading using JSX */}
      <h1 style={{ color: "#333" }}>Office Space Rental</h1>

      {/* Image using attribute */}
      <img src="/office_image.jpeg" alt="Office Space" style={{ width: "150px", borderRadius: "8px" }} />

      {/* Single Office Object Display */}
      <h2>{office.name}</h2>
      <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
        Rent: ₹{office.rent}
      </p>
      <p>Address: {office.address}</p>

      {/* List of Office Spaces */}
      <h2>Available Offices</h2>
      <ul>
        {officeList.map((o, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>{o.name}</strong><br />
            <span style={{ color: o.rent < 60000 ? "red" : "green" }}>
              Rent: ₹{o.rent}
            </span><br />
            <span>{o.address}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
