import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import VehicleRecommendation from "./projectmodals/VehicleRecommendation";
import FollowRivers from "./projectmodals/FollowRivers";

class Projects extends Component {
  state = {};

  render() {
    return (
      <div className="projects mb-5">
        <h1 className="text-center mb-5">PROJECTS</h1>
        <Container>
          <Row className="justify-content-center">
            <Col sm={12} lg={3} md={6} className="container-photo m-2">
              <div className="button text-center">
                <VehicleRecommendation />
              </div>
              <article className="text-left">
                <h2>
                  Vehicle <br />
                  Recommendation
                </h2>
                <h4>Tableau | Data Analysis</h4>
              </article>
              <img src={`${process.env.PUBLIC_URL}/vehicle.jpg`} />
            </Col>
            <Col sm={12} lg={3} md={6} className="container-photo m-2">
              <div className="button text-center">
                <FollowRivers />
              </div>
              <article className="text-left">
                <h2>
                  Follow <br />
                  River
                </h2>
                <h4>Tableau | Data Analysis</h4>
              </article>
              <img src={`${process.env.PUBLIC_URL}/followriver.jpg`} />
            </Col>
            <Col sm={12} lg={3} md={6} className="container-photo m-2">
              {" "}
              <div className="button text-center">
                <VehicleRecommendation />
              </div>
              <article className="text-left">
                <h2>
                  Follow <br />
                  River Test
                </h2>
                <h4>Tableau | Data Analysis</h4>
              </article>
              <img src={`${process.env.PUBLIC_URL}/followriver.jpg`} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
