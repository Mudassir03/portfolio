import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import po from "../../Assets/Projects/po.jpg"


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> WELCOME </span>   
            </h1>
            <p className="home-about-body">
              To the official website of Azib Ahmed, a young professional journalist.<br/> Azib has impressed reader with some extraordinary articles while <br/> working at The Lokmat Times Daily. 

              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
        
           
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
