import React from "react";
import './equipment.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eq1 from './Asset/equip1.jpg';
import eq2 from './Asset/equip2.jpg';
import eq3 from './Asset/equip3.jpg';
import eq4 from './Asset/equip6.jpg';
const Equipment=()=>{
return(
    <>
    <section className="equip" id="equip">
    <h1 className="pro-1-h1">OUR Equipment</h1><hr></hr>
    <div className="backimg">
  <Container>
      <Row > 
        <Col  data-aos="fade-right"><img src={eq1} className="img-size" /></Col>
        <Col className="new-color" data-aos="fade-left"><h2>Deadlift</h2> <hr></hr>
        <p className="Para-1 ">🏋️‍♂️ What is a Deadlift? The deadlift is a compound weightlifting exercise where you lift a loaded barbell or weight from the ground up to your hips while maintaining a straight back. It primarily targets your posterior chain—which includes the glutes, hamstrings, and lower back. </p> 
        <Button  className="d-block mx-auto " style={{ backgroundColor: "#222831", color: "#eeeeee" }}>Know More</Button></Col>
      </Row> <br></br>
      <Row> 
     
        <Col className="new-color" data-aos="fade-right"><h2>Gym-Ball</h2> <hr></hr>
        <p className="Para-1">🏋️‍♂️ What is a Deadlift? The deadlift is a compound weightlifting exercise where you lift a loaded barbell or weight from the ground up to your hips while maintaining a straight back. It primarily targets your posterior chain—which includes the glutes, hamstrings, and lower back. </p> 
        <Button  className="d-block mx-auto " style={{ backgroundColor: "#222831", color: "#eeeeee" }}>Know More</Button></Col>
       <Col data-aos="fade-left"><img src={eq2} width={500} /></Col>      
      </Row><br></br>
      <Row> 
        <Col data-aos="fade-right"><img src={eq3} width={500} /></Col>
        <Col className="new-color eq-h2" data-aos="fade-left"><h2>Barebell</h2> <hr></hr>
        <p className="Para-1">🏋️‍♂️ What is a Deadlift? The deadlift is a compound weightlifting exercise where you lift a loaded barbell or weight from the ground up to your hips while maintaining a straight back. It primarily targets your posterior chain—which includes the glutes, hamstrings, and lower back. </p> 
        <Button  className="d-block mx-auto " style={{ backgroundColor: "#222831", color: "#eeeeee" }}>Know More</Button></Col>
      </Row><br></br> 5
      <Row> 
      
        <Col className="new-color eq-h2"  data-aos="fade-right"><h2>Skipping</h2> <hr></hr>
        <p className="Para-1">🏋️‍♂️ What is a Deadlift? The deadlift is a compound weightlifting exercise where you lift a loaded barbell or weight from the ground up to your hips while maintaining a straight back. It primarily targets your posterior chain—which includes the glutes, hamstrings, and lower back. </p> 
        <Button  className="d-block mx-auto " style={{ backgroundColor: "#222831", color: "#eeeeee" }}>Know More</Button></Col>
       <Col data-aos="fade-left"><img src={eq4} width={500} /></Col>
      </Row>
       </Container></div>
       </section>
    </>
)
}
export default Equipment;