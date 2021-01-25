import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class ServiceCanada extends Component {
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
      <>
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
                src={`${process.env.PUBLIC_URL}/servicecanada.jpg`}
                style={{ width: "100%" }}
              />
              Service Canada Hackathon
              <h6>Secured 3rd place</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              The hackathon was organize by Service Canada. An open-ended
              problem statement was given and the goal was to come up with a
              feasible and effective solution from the government's point of
              view while avoiding the usage of any third-party APIs owing to
              security reasons.
              <br />
              <br />
              <span className="text-secondary fst-italic">
                Cannot share details because teams signed a NDA
              </span>
            </p>
            <Button
              className="mr-3"
              variant="outline-danger"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1t9HYrVbGushaTrw_iMW7USzA9uTdw5cM/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Photo{"  "}
              <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleModalClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ServiceCanada;
