import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "../Home/Home2";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container className="about-section">
      <Particle />
      <Home2/>
      <h1 className="home-about-section"><b className="purple">My Techstack</b></h1>
      <Techstack/>
      <h1 className="home-about-section"><b className="purple">My Toolstack</b></h1>
      <Toolstack/>
    </Container>
  );
}

export default About;
