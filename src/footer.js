import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HashLink  } from "react-router-hash-link";
import './footer.css';
const Footer=()=>{
return(
    <>
    <footer className='main text-white  pt-4 pb-4'>
    <Container>
      <Row>
        <Col md={4}><h5>GETFIT</h5>
        <p>Achieve your fitness goals with us. Join now and stay healthy!</p>
        </Col>
        <Col md={4}><h5>Quick Links</h5>
        <ul>
            <li><a href='#Getstart' >GetStarted</a></li>
            <li><a href="#fitness">Fitness institute</a></li>
            <li><a href="#Product">Products</a></li>
            <li><a href="#equip">Equipments</a></li>
            <li><a href="#contactus">Contact Us</a></li>
        </ul>
        </Col>
        <Col md={4}> <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com"><FaFacebook /> Facebook</a>
              <a href="https://twitter.com"><FaTwitter /> Twitter</a>
              <a href="https://instagram.com"><FaInstagram /> Instagram</a>
              <a href="https://linkedin.com"><FaLinkedin /> Linkedin</a>
            </div></Col>
      </Row>
      <hr className='mt-4'></hr>
       <p className="text-center mb-0">&copy; 2025 GETFIT. All rights reserved.</p>
    </Container></footer>
    </>
)
}
export default Footer;