import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let conversionRate = 0;
    const currencyLower = currency.toLowerCase();

    if (currencyLower === "euro") {
      conversionRate = 90; // 1 Euro = 90 INR
    } else if (currencyLower === "usd") {
      conversionRate = 75; // 1 USD = 75 INR
    } else {
      setResult("Conversion rate not available!");
      return;
    }

    const converted = (amount * conversionRate).toFixed(2);
    setResult(`${converted} INR`);
  };

  const headingStyle = { color: "green" };
  const boxStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    width: "300px",
    backgroundColor: "#f9f9f9",
    marginBottom: "20px"
  };

  const inputStyle = {
    padding: "8px",
    width: "100%",
    marginBottom: "10px"
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={headingStyle}>Currency Convertor</h2>
      <div style={boxStyle}>
        <form onSubmit={handleSubmit}>
          {/* Input for amount */}
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            style={inputStyle}
          />

          {/* Input for currency */}
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            placeholder="Enter currency (Euro/USD)"
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>Convert to INR</button>
        </form>
        <p style={{ marginTop: "10px" }}>Converted Amount: {result}</p>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
