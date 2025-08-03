import React, { useState } from "react";

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // generate random reference number
    const referenceNumber = Math.floor(Math.random() * 1000000);

    alert(
      `Complaint Registered Successfully!\nReference No: ${referenceNumber}\nName: ${employeeName}\nComplaint: ${complaint}`
    );

    // reset form
    setEmployeeName("");
    setComplaint("");
  };

  const formContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh", // center vertically
  };

  const formBoxStyle = {
    width: "400px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
  };

  const headingStyle = {
    textAlign: "center",
    color: "green",
    marginBottom: "20px",
  };

  return (
    <div style={formContainerStyle}>
      <div style={formBoxStyle}>
        <h2 style={headingStyle}>Register Your Complaints here !!!</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Employee Name:</label>
            <input
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Complaint:</label>
            <textarea
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              rows="4"
              required
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Raise Complaint
          </button>
        </form>
      </div>
    </div>
  );
}

export default ComplaintRegister;
