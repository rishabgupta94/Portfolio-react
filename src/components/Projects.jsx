import React, { Component } from "react";
import { Card, Container, Button, Row, Col, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

class Projects extends Component {
  state = {
    modalShow: false,
  };

  handleModalShow = () => {
    this.setState({ modalShow: true });
  };

  handleModalClose = () => {
    this.setState({ modalShow: false });
  };

  render() {
    return (
      <div className="projects mb-5">
        <h1 className="text-center mb-5">PROJECTS</h1>
        <Container>
          <Row>
            <Col sm={12} lg={4} md={6} className="container-photo">
              <div className="button text-center">
                <Button variant="warning" onClick={this.handleModalShow}>
                  Learn More
                </Button>
                <Modal
                  show={this.state.modalShow}
                  onHide={this.handleModalClose}
                  centered
                >
                  <Modal.Header className="text-center p-0">
                    <Modal.Title>
                      <img
                        src={`${process.env.PUBLIC_URL}/vehicle.jpg`}
                        style={{ width: "100%" }}
                      />
                      Vehicle Recommendation
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      The purpose of this project was to give a recommendation
                      to a customer, who intends to buy a car and has expressed
                      a certain criteria that are important in her decision.
                      Analysis and feature engineering of the data was performed
                      to extract the information from the variables with an aim
                      to provide a reasonable recommendation.
                      <br />
                      <br />
                      Tableau was used as a choice of visualization tool.
                    </p>
                    <Button
                      className="mr-3"
                      variant="outline-danger"
                      onClick={() =>
                        window.open(
                          "https://public.tableau.com/profile/rishab.gupta#!/vizhome/RecommendationforVehiclePurchase/SCover",
                          "_blank"
                        )
                      }
                    >
                      Tableau{"  "}
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                    </Button>
                    <Button variant="outline-danger">
                      Report{"  "}
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                    </Button>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.handleModalClose}>Close</Button>
                  </Modal.Footer>
                </Modal>
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
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
