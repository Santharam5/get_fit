import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbars.css";
import Getfit from "./Asset/GETFIT.png";
import { HashLink } from "react-router-hash-link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Navbars = () => {
  return (
    <>
      <Navbar
        className="customize-navbar d-flex flex-column flex-md-row justify-content-between align-items-center w-100 text-white"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#phone" style={{ color: "white" }}>
            📞12345678|✉️Getfit@gmail.com
          </Navbar.Brand>
          <Navbar.Brand style={{ color: "white" }}>
            Welcome To GETFIT
          </Navbar.Brand>
          <Navbar.Brand href="" style={{ color: "white" }}>
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
      {/* first navbar */}

      <Navbar className="customize-navbar2 sticky-top py-2 " expand="lg">
        <Container fluid>
          {" "}
          {/*its make fluid to screen edge from navbar */}
          <Navbar.Brand
            className="d-flex align-items-center fs-5"
            as={HashLink}
            smooth
            to="#car"
          >
            {" "}
            <img
              src={Getfit}
              alt="logo"
              width="40"
              height="40"
              className="me-2"
            />
            GETFIT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link
                as={HashLink}
                smooth
                to="#Getstart"
                className="hoverusingclass fs-6 "
              >
                GetStarted
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#fitness"
                className="hoverusingclass fs-6"
              >
                Fitness institute
              </Nav.Link>
              <NavDropdown
                title="Products"
                id="basic-nav-dropdown"
                className="hoverusingclass fs-6"
              >
                <NavDropdown.Item
                  as={HashLink}
                  smooth
                  to="#Product"
                  className="dropdownnavbar fs-6"
                >
                  Newly Released Products{" "}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={HashLink}
                  smooth
                  to="#Product"
                  className="dropdownnavbar fs-6"
                >
                  Discounted Products
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={HashLink}
                smooth
                to="#equip"
                className="hoverusingclass fs-6"
              >
                Equipments
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#Bmical"
                className="hoverusingclass fs-6"
              >
                BMI Calculator
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#contactus"
                className="hoverusingclass fs-6"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* second navbar */}
      <hr className="line1"></hr>
    </>
  );
};
export default Navbars;
