import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import VehicleRecommendation from "../projectmodals/VehicleRecommendation";
import FollowRivers from "../projectmodals/FollowRivers";
import OpenData2020 from "../projectmodals/OpenData2020";
import ServiceCanada from "../projectmodals/ServiceCanada";
import RailsToRoads from "../projectmodals/RailsToRoads";
import DataVisualizationUNB from "../projectmodals/DataVisualizationUNB";
import HalifaxLibrary from "../projectmodals/HalifaxLibrary";
import FarmCOP from "../projectmodals/FarmCOP";

class Projects extends Component {
  state = {};

  render() {
    return (
      <div className="projects mb-5">
        <div className="title-margin-top" />
        <h1 className="text-center">PROJECTS</h1>
        <div className="title-margin" />
        <Row className="justify-content-center">
          <Col sm={12} lg={3} md={6} className="container-photo m-2">
            <div className="button text-center">
              <FarmCOP />
            </div>
            <article className="text-left">
              <h2>
                Farms' Cost of <br />
                Production
              </h2>
              <h4>AWS | React | IoT</h4>
            </article>
            <img src={`${process.env.PUBLIC_URL}/farms.jpeg`} />
          </Col>
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
            <div className="button text-center">
              <OpenData2020 />
            </div>
            <article className="text-left">
              <h2>
                NS Open Data <br />
                2020
              </h2>
              <h4>Open Data | Visualization</h4>
            </article>
            <img src={`${process.env.PUBLIC_URL}/recycling.jpg`} />
          </Col>
          <Col sm={12} lg={3} md={6} className="container-photo m-2">
            <div className="button text-center">
              <ServiceCanada />
            </div>
            <article className="text-left">
              <h2>
                Service Canada <br />
                Hackathon
              </h2>
              {/* <h4> | Data Analysis</h4> */}
            </article>
            <img src={`${process.env.PUBLIC_URL}/servicecanada.jpg`} />
          </Col>
          <Col sm={12} lg={3} md={6} className="container-photo m-2">
            <div className="button text-center">
              <RailsToRoads />
            </div>
            <article className="text-left">
              <h2>
                Rails to <br />
                Roads
              </h2>
              <h4>Innovation Challenge</h4>
            </article>
            <img src={`${process.env.PUBLIC_URL}/rails.jpg`} />
          </Col>
          <Col sm={12} lg={3} md={6} className="container-photo m-2">
            <div className="button text-center">
              <DataVisualizationUNB />
            </div>
            <article className="text-left">
              <h2>
                Data Visualization <br />
                UNB 2018
              </h2>
              <h4>Open Data | Visualization</h4>
            </article>
            <img src={`${process.env.PUBLIC_URL}/UNB.png`} />
          </Col>
          <Col sm={12} lg={3} md={6} className="container-photo m-2">
            <div className="button text-center">
              <HalifaxLibrary />
            </div>
            <article className="text-left">
              <h2>
                Halifax Public <br />
                Library
              </h2>
              <h4>SQL | Python | PHP</h4>
            </article>
            <img src={`${process.env.PUBLIC_URL}/halifaxlibrary.jpg`} />
          </Col>
        </Row>
        <div className="page-spacer" />
      </div>
    );
  }
}

export default Projects;
