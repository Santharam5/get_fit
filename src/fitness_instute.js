import React from "react";
import "./fitness_inst.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import corprate from "./Asset/corprate.jpg";
import training from "./Asset/training.jpg";
import group from "./Asset/grouptraining.jpg";
import online from "./Asset/GGFI-Online-Personal-Training.jpg";
import offline from "./Asset/GGFI-Personal-training.jpg";
import ace from "./Asset/GGFI-ACE-Certification.jpg";
import short from "./Asset/GGFI-Short-courses.jpg";
const Fitness = () => {
  return (
    <>
      <section className="fitness" id="fitness">
        <div className="overall">
          <Container fluid>
            <Row className="backcolor">
              <Col>
                <h1 className="h1-alignment">Our Programs</h1>
                <p className="para-alignment-fitness">
                  The diverse range of programs, from group exercises, corporate
                  training to personalized training, caters to varying fitness
                  levels and goals. Members get variety and the option of
                  customization as each gym offers a diversity of exercise
                  options and specialized programs, allowing members to choose
                  activities that align with their interests and fitness
                  objectives. Personalized training programs ensure workouts are
                  tailored to individual needs, maximizing results.
                  Participating in group exercises fosters a sense of community
                  among members, providing social support and encouragement,
                  which can be instrumental in maintaining consistency in their
                  fitness journey.
                </p>
              </Col>
            </Row>
          </Container>
          <br></br>
          <Container>
            <Row className="backcolor">
              <Col data-aos="fade-right">
                <img src={corprate} alt="corpratepic" width={500}  />
              </Col>
              <Col data-aos="fade-left">
                <h3>Corporate Membership</h3>
                <hr></hr>
                <p className="para-alignment-fitness-second">
                  Dont have time to go to the gym? We get the gym to you. GETFIT
                  Gym India offers corporate membership programs tailored for
                  companies looking to promote employee wellness and fitness.
                  These programs are designed to encourage a healthier workforce
                  by providing BMI screening, diet and nutrition counselling,
                  fitness activities and seminars for building a healthier
                  lifestyle.
                </p>
              </Col>
            </Row>
          </Container>
          <br></br>
          <Container>
            <Row className="backcolor">
              <Col data-aos="fade-left">
                <h3>Personal Training</h3>
                <hr></hr>
                <p className="para-alignment-fitness">
                  GETFIT India is known for the competent personal trainers and
                  extraordinary personal training offered by them. The
                  individuals seeking for serious goal-oriented fitness,
                  personalized guidance, motivation, and specialized workout
                  plans, Gold’s Gym India personal training program is for them.
                </p>
              </Col>
              <Col data-aos="fade-right">
                <img src={training} alt="training" width={500} />
              </Col>
            </Row>
          </Container>
          <br></br>
          <Container>
            <Row className="backcolor">
              <Col data-aos="fade-right">
                <img src={group} alt="program" width={500} />
              </Col>
              <Col data-aos="fade-left">
                <h3>Group Program</h3>
                <hr></hr>
                <p className="para-alignment-fitness">
                  GETFIT Gym India provides a variety of group fitness programs
                  such as dance fitness, yoga, HIIT, and much more tailored to
                  cater to diverse fitness preferences and goals. These group
                  programs offer a supportive environment and a sense of
                  community while engaging participants in fun and effective
                  workouts.
                </p>
              </Col>
            </Row>
          </Container>
          <br></br>
        </div>
        <div className="overall-2">
          <h1 className="middle-alginment newcolor">
            GETFIT Gym <span className="marked">Fitness Institute</span>
          </h1>
          <h2 className="middle-alginment newcolor">
            Become a Certified Fitness Professional Today
          </h2>
          <h3 className="middle-alginment newcolor">
            Physical Activity Or Can Improve Your Health
          </h3>
          <Container className="mt-4">
            <Row>
              <Col md={3}>
                <div className="box img-fluid w-100 h-100">
                  <img src={online} alt="online" style={{ maxWidth: 250 }} />
                  <h3 className="middle-alginment newcolor">GGFI online</h3>
                </div>
              </Col>
              <Col md={3}>
                <div className="box">
                  <img src={offline} alt="offline" style={{ maxWidth: 250 }} />
                  <h3 className="middle-alginment newcolor">GGFI offline</h3>
                </div>
              </Col>
              <Col md={3}>
                <div className="box">
                  <img src={ace} alt="ace" style={{ maxWidth: 250 }} />
                  <h3 className="middle-alginment newcolor">ACE</h3>
                </div>
              </Col>
              <Col md={3}>
                <div className="box">
                  <img src={short} alt="short" style={{ maxWidth: 250 }} />
                  <h3 className="middle-alginment newcolor">Short Courses</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};
export default Fitness;
