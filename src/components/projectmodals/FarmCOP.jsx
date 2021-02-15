import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class FarmCOP extends Component {
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
                src={`${process.env.PUBLIC_URL}/farms.jpeg`}
                style={{ width: "100%" }}
              />
              Farms' Cost of Production
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span style={{ fontWeight: "bold" }}>Technologies used:</span>
            {"  "}
            <span>React, AWS, IoT</span>
            <br /> <br />
            <p>
              IoT devices were installed and a dashboard was created to monitor
              the cost of production of the farmers. The dashboard will help the
              farmers monitor the usage pattern of the cost centers and make
              better decisions in the future.
              <br />
              <br />
              <span className="text-secondary fst-italic">
                Cannot share details because our team signed a NDA
              </span>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleModalClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default FarmCOP;
