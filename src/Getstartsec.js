import React from "react";
import './Getstarted.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import india from './Asset/india.png';
import gym from './Asset/gym.png';
import group from './Asset/exercise.png';


const Getstart=()=>{
return(
    <>
    <section className="Getstart" id="Getstart">
    <div className="backimage">
        <h1 className="h1alignment">What Makes Us Different Than Others</h1>
    <Container className="g-4 justify-content-center">
      <Row>
        <Col xs={12} sm={6} md={4}><Card className="h-100 text-center">
      <Card.Img variant="top" src={india}/>
      <Card.Body>
        <Card.Title>20+ States Have Branch</Card.Title>
        
      </Card.Body>
    </Card></Col>
        <Col xs={12} sm={6} md={4}> <Card className="h-100 text-center">
      <Card.Img variant="top" src={gym} />
      <Card.Body>
        <Card.Title>150+ Gyms available</Card.Title>
        
      </Card.Body>
    </Card></Col>
     <Col xs={12} sm={6} md={4}> <Card className="h-100 text-center">
      <Card.Img variant="top" src={group}/>
      <Card.Body>
        <Card.Title>Active community</Card.Title>
      </Card.Body>
    </Card></Col>
    
      </Row>
      
    </Container>
    </div>
    <h1 className="h1alignment2">Our Legacy</h1> <br></br>
    <Container style={{textAlign:"center"}}>
      <Row>
        <Col><iframe width="600" height="400" src="https://www.youtube.com/embed/R9Q13UJU7P0" title="Celebrating 21 Years of Fitness Excellence at Gold&#39;s Gym India | 21st Anniversary Special" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
        <Col><p className="para-alignment">GETFIT is a globally renowned fitness brand that has made its mark in India. With a strong legacy dating back to 1965 in Venice Beach, California, GETFIT Gym has become synonymous with fitness excellence and innovation. GETFIT Gym India carries the legacy ahead in the home country since its inception in 2002. World-class fitness facilities and a comprehensive range of workout programs tailored to meet the needs of diverse fitness enthusiasts is what sets us apart from others.
GETFIT Gym India, a part of this esteemed legacy, has expanded its presence across various cities, aiming to empower individuals to achieve their fitness goals, regardless of their fitness levels or aspirations. It's a fitness haven that combines state-of-the-art equipment, expert trainers, and a supportive community to foster a holistic approach to wellness.</p></Col>
      </Row>
    </Container>
    <br></br>
    </section>
    </>
)
}
export default Getstart;