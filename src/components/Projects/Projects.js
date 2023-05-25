import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import l1 from "../../Assets/Projects/l1.jpg";
import l2 from "../../Assets/Projects/l2.jpg";
import l3 from "../../Assets/Projects/l3.jpg";
import l4 from "../../Assets/Projects/l4.jpg";
import l5 from "../../Assets/Projects/l5.jpg";

import gr1 from "../../Assets/Projects/gr1.jpg"
import gr2 from "../../Assets/Projects/gr2.jpg"
import gr3 from "../../Assets/Projects/gr3.jpg"
import gr4 from "../../Assets/Projects/gr4.jpg"
import gr5 from "../../Assets/Projects/gr5.jpg"
import gr6 from "../../Assets/Projects/gr6.jpg"
import gr7 from "../../Assets/Projects/gr7.jpg"
import gr8 from "../../Assets/Projects/gr8.jpg"
import g9 from "../../Assets/Projects/g9.jpg"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Letter To <strong className="purple">Editor </strong>
        </h1>
        <p style={{ color: "white" }}>
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={l1}
              isBlog={false}
              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={l2}
              isBlog={false}
                          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={l3}
              isBlog={false}
                          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={l4}
              isBlog={false}
                          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={l5}
              isBlog={false}
                          
            />
          </Col>

        
        </Row>
        <hr/><br/>
        <h1>Ground Reports</h1>
        <br/>
        <hr/>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gr1}
              isBlog={false}
              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gr2}
              isBlog={false}
                          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gr3}
              isBlog={false}
                          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gr4}
              isBlog={false}
                          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gr5}
              isBlog={false}
                          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gr6}
              isBlog={false}
                          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gr7}
              isBlog={false}
                          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gr8}
              isBlog={false}
                          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={g9}
              isBlog={false}
                          
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
