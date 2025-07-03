import React, { useState, useCallback } from "react";
import "./admin_panel.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./navbars.css";
import Getfit from "./Asset/GETFIT.png";
import { HashLink } from "react-router-hash-link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Adminpanel = () => {
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    query: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "phonenumber" && !/^\d*$/.test(value)) {
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handlesubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (formData.phonenumber.length !== 10) {
        alert("Phone number must be 10 digits");
        return;
      }
      fetch("http://localhost:8080/createquery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((resolved) => resolved.json())
        .then((response) => {
          console.log(response);
          alert("Query created successfully");
          setFormData({ name: "", phonenumber: "", email: "", query: "" });
        })
        .catch((error) => {
          console.log(error);
          alert("Error submitting form");
        });
    },
    [formData]
  );

  return (
    <>
      <Navbar
        className="customize-navbar d-flex flex-column flex-md-row justify-content-between align-items-center w-100 text-white"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#phone" style={{ color: "white" }}>
            📞12345678 | ✉️ Getfit@gmail.com
          </Navbar.Brand>
          <Navbar.Brand style={{ color: "white" }}>Welcome Admin</Navbar.Brand>
          <Navbar.Brand style={{ color: "white" }}>
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar className="customize-navbar2 sticky-top py-2" expand="lg">
        <Container fluid>
          <Navbar.Brand
            className="d-flex align-items-center fs-5"
            as={HashLink}
            smooth
            to="#car"
          >
            <img
              src={Getfit}
              alt="logo"
              width="40"
              height="40"
              className="me-2"
            />{" "}
            GETFIT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={HashLink}
                smooth
                to="#view"
                className="hoverusingclass fs-6"
              >
                View
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#edit"
                className="hoverusingclass fs-6"
              >
                Edit
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#create"
                className="hoverusingclass fs-6"
              >
                Create
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#delete"
                className="hoverusingclass fs-6"
              >
                Delete
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/get_fit"
                className="hoverusingclass fs-6"
              >
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <hr className="line1" />

      <div style={{ padding: "20px" }}>
        <h1>Create Query</h1>
        <Form onSubmit={handlesubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter a Name"
              maxLength={40}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Control
              type="tel"
              name="phonenumber"
              pattern="\d{10}"
              maxLength={10}
              placeholder="Enter a Phone number"
              value={formData.phonenumber}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter an Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formQuery">
            <Form.Control
              as="textarea"
              rows={3}
              name="query"
              value={formData.query}
              placeholder="Enter your Queries"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Adminpanel;
