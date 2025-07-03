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
import Table from "react-bootstrap/Table";

const Adminpanel = () => {
  const [deleteAllUser, setDeleteAllUser] = useState("");

  const HandleDeleteAllUser = () => {
    fetch("http://localhost:8080/deleteall", { method: "DELETE" })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        console.log("Data");
        setDeleteAllUser(data);
        setItems([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [deleteId, setDeleteid] = useState("");
  const [deleteData, setDeleteData] = useState("");
  const HandleDeleteSingleUser = () => {
    if (!deleteId) {
      alert("Please enter id to delete user");
      return;
    }
    fetch(`http://localhost:8080/${deleteId}`, { method: "DELETE" })
      .then((res) => res.text())
      .then((data) => {
        console.log("Data deleted Successfully");
        setDeleteData(`User with ID ${deleteId} deleted successfully`);
        setDeleteid("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [updateId, setUpdateId] = useState("");
  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    query: "",
  });
  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleUpdateUSer = () => {
    if (!updateId) {
      alert("please enter a User id");
      return;
    }
    fetch(`http://localhost:8080/${updateId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("user Updated:", data);
        alert("User updated Successfully");
        setUpdateId("");
        setUpdateData({
          name: "",
          email: "",
          phonenumber: "",
          query: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [searchId, setSearchId] = useState("");
  const [singleUser, setSingleUser] = useState(null);
  const HandleViewSingle = () => {
    if (!searchId) {
      alert("please enter id");
      return;
    }
    fetch(`http://localhost:8080/getalluser/${searchId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSingleUser(data);
      })
      .catch((error) => {
        console.log(error);
        setSingleUser(null);
      });
  };

  const [items, setItems] = useState([]);

  const HandleView = () => {
    fetch("http://localhost:8080/getalluser")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => {
        console.log(error);
        alert("Failed to fetch data");
      });
  };
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
        <h2>Create Query</h2>
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
      <hr></hr>
      <h2>View</h2>

      <ul>
        {items.length === 0 && <li>Press To Fetch data</li>}

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Query</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No data is currently available Click fetch
                </td>
              </tr>
            ) : (
              items.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.phonenumber}</td>
                  <td>{user.email}</td>
                  <td>{user.query}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>

        <center>
          <button onClick={HandleView}>fetch Data</button>
        </center>
      </ul>
      <hr></hr>
      <h2>View User by ID</h2>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="getuserid">Enter ID To Find User : </label>
        <input
          type="text"
          name="getuserid"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />{" "}
      </div>

      <center>
        {singleUser && (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Query</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{singleUser.id}</td>
                <td>{singleUser.name}</td>
                <td>{singleUser.phonenumber}</td>
                <td>{singleUser.email}</td>
                <td>{singleUser.query}</td>
              </tr>
            </tbody>
          </Table>
        )}
        <button onClick={HandleViewSingle}>Fetch single user</button>
      </center>
      <hr></hr>
      <h2>Update User by id</h2>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="updateuser">Enter Id to Update the User deatils</label>
        <input
          name="updateuser"
          type="text"
          value={updateId}
          onChange={(e) => setUpdateId(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter new name"
          value={updateData.name}
          onChange={handleUpdateChange}
        />{" "}
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Enter new Email"
          value={updateData.email}
          onChange={handleUpdateChange}
        />{" "}
      </div>
      <div>
        <input
          type="text"
          name="phonenumber"
          placeholder="Enter new Phonenumber"
          value={updateData.phonenumber}
          onChange={handleUpdateChange}
        />{" "}
      </div>
      <div>
        <input
          type="text"
          name="query"
          placeholder="Enter new Query"
          value={updateData.query}
          onChange={handleUpdateChange}
        />{" "}
      </div>
      <button onClick={handleUpdateUSer}>Update User</button>
      <hr></hr>
      <div>
        <label htmlFor="deletesingleuser">Enter Id To Delete single user</label>
        <input
          name="deletesingleuser"
          type="text"
          value={deleteId}
          onChange={(e) => setDeleteid(e.target.value)}
        />
        <button onClick={HandleDeleteSingleUser}>
          Press Button to Delete Single User
        </button>
        {deleteData && <p>deleteData</p>}
      </div>
      <hr></hr>
      <div>
        {" "}
        <button onClick={HandleDeleteAllUser}>Delete All Users</button>
        {deleteAllUser && <p>{deleteAllUser}</p>}
      </div>
    </>
  );
};

export default Adminpanel;
