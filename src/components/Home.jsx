import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Experience from "./Experience";
import "./Home.css";
import Skills from "./Skills";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <Container>
          <Row className="align-items-center">
            <Col className="text-center">
              <text className="name">RISHAB GUPTA</text>
              <h6 className="sub-heading">AWS Certified Solutions Architect</h6>
              <h6 className="sub-heading">Front End Web Developer</h6>
              <Button variant="warning">
                <span className="know-me-text">Get to know me</span>
              </Button>
            </Col>
            <Col>
              <img
                className="my-photo"
                src={`${process.env.PUBLIC_URL}/photo.jpg`}
              />
            </Col>
          </Row>
        </Container>
        <Skills />
        <Experience />
      </div>
    );
  }
}

export default Home;
