import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signuplogin.css";
import Button from "react-bootstrap/Button";

const SignupLogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState(""); // Error state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    fetch("https://getfit-backend-vso9.onrender.com/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json().then((data) => ({
            ok: response.ok,
            data,
          }));
        } else {
          const text = await response.text();
          return {
            ok: response.ok,
            data: { message: text },
          };
        }
      })
      .then(({ ok, data }) => {
        if (ok) {
          alert("Signup successful!");
          navigate("/");
        } else {
          setError(data.message || "Signup failed");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError("Network error. Please try again.");
      });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create Account</h2>

        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            id="phonenumber"
            placeholder="Phone Number"
            value={formData.phonenumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" className="submit-btn mb-3">
          Register
        </Button>

        <Button
          variant="danger"
          type="button"
          onClick={() => navigate("/")}
          className="submit-btn"
        >
          Back to User Login
        </Button>
      </form>
    </div>
  );
};

export default SignupLogin;
