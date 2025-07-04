import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminlogin.css";

const AdminLogin = () => {
  const [adminname, setAdminname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/admin/adminlogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: adminname, password }),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        alert("Admin login successful!");
        navigate("/Adminpanel"); // redirect to admin panel/dashboard
      } else {
        alert(data.message || "Invalid admin credentials");
      }
    } catch (error) {
      console.error("Admin login error:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="backimage">
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.heading} className="color-white">
            Admin Login
          </h2>
          <div style={styles.inputGroup}>
            <label style={styles.label} className="color-white">
              Admin Username
            </label>
            <input
              type="text"
              value={adminname}
              onChange={(e) => setAdminname(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} className="color-white">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Login as Admin
          </button>
          <br></br> <br></br>
          <button
            style={styles.button2}
            type="button"
            onClick={() => navigate("/get_fit")}
          >
            Cancel
          </button>
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
    background: " rgba(136, 0, 255, 0.64)",
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
    background: "orange",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  button2: {
    width: "100%",
    padding: "10px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default AdminLogin;
