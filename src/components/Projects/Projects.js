import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import alex from "../../Assets/Projects/Alex.png";
import snap from "../../Assets/Projects/snap.png";
import weather from "../../Assets/Projects/weather.png";
import blog from "../../Assets/Projects/blog-site.png";
import currencly from "../../Assets/Projects/currencly.png";
import wds from "../../Assets/Projects/wds.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alex}
              isBlog={false}
              title="Alex's Salon"
              description="Gives anyone the ability to make their own salon website. this was an app created for user's who need a basic website to fit their needs"
              ghLink="https://github.com/OmarDGreat/Alexs-Salon"
              demoLink="https://alex-salon.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snap}
              isBlog={false}
              title="Oh-Snap"
              description="My personal blog where I write about my experiences and share my knowledge with the world."
              ghLink="https://github.com/OmarDGreat/photo-port"
              demoLink="https://omardgreat.github.io/photo-port/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Dashboard"
              description="A weather dashboard that allows you to search for a city and see the current weather and the 5 day forecast."
              ghLink="https://omardgreat.github.io/Weather-Dashboard/"
              demoLink="https://github.com/OmarDGreat/Weather-Dashboard"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencly}
              isBlog={false}
              title="Currencly"
              description="A currency converter that allows you to convert any currency to any other currency."
              ghLink="https://github.com/OmarDGreat/Currencly"
              demoLink="https://omardgreat.github.io/Currencly/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="BlogSite"
              description="The first Blogsite I've created made to test my abilities"
              ghLink="https://blogsite-app1.herokuapp.com/"
              demoLink="https://github.com/OmarDGreat/Blog-Site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wds}
              isBlog={false}
              title="Work Day Scheduler"
              description=" A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery."
              ghLink="https://github.com/OmarDGreat/Work-Day-Scheduler"
              demoLink="https://omardgreat.github.io/Work-Day-Scheduler/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
