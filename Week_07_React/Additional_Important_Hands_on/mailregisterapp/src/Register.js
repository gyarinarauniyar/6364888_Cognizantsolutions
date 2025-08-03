import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Validation for individual field
  const validateField = (fieldName, value) => {
    let error = "";

    if (fieldName === "name") {
      if (value.trim().length < 5) error = "Name must have at least 5 characters";
    }
    if (fieldName === "email") {
      if (!value.includes("@") || !value.includes("."))
        error = "Email must contain '@' and '.'";
    }
    if (fieldName === "password") {
      if (value.length < 8) error = "Password must have at least 8 characters";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    validateField("name", value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateField("email", value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validateField("password", value);
  };

  // Final form validation
  const validateForm = () => {
    validateField("name", name);
    validateField("email", email);
    validateField("password", password);
    return !errors.name && !errors.email && !errors.password &&
           name && email && password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`Registration Successful!\nName: ${name}\nEmail: ${email}`);
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    background: "#f0f0f0",
  };

  const formStyle = {
    width: "400px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    background: "#fff",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  };

  const headingStyle = { textAlign: "center", color: "green", marginBottom: "20px" };
  const errorStyle = { color: "red", fontSize: "14px" };

  return (
    <div style={pageStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Mail Register</h2>

        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.password && <p style={errorStyle}>{errors.password}</p>}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
