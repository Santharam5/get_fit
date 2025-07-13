import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userlogin.css";
const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://getfit-backend-vso9.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username, password }),
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("Login successful!");
        localStorage.setItem("isAuth", true);
        navigate("/get_fit"); // redirect to home page
      } else {
        alert(data.message || "Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="backimage">
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.heading}>GETFIT User Login</h2>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup} >
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" className="mb-3" style={styles.button}>
            Login
          </button>

          <button className="mb-3"
            type="button"
            onClick={() => navigate("/adminlogin")}
            style={{
              ...styles.button,
              background: "#fd7e14",
              marginTop: "10px",
            }}
          >
            Admin Login
          </button>

          <p>
            No <b>Account</b> Yet Create New Account &#8594;{" "}
            <a href="/signuplogin">Sign Up</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  form: {
    padding: "30px",
    borderRadius: "8px",
    background: "	#f0f8ff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "300px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ced4da",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "blue",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default UserLogin;
