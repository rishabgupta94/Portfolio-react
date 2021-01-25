import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class RailsToRoads extends Component {
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
                src={`${process.env.PUBLIC_URL}/rails.jpg`}
                style={{ width: "100%" }}
              />
              Rails to Roads
              <h6>Secured 1st place</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Worked over the weekend with my team to come up with an innovative
              idea to solve the transportation problem in Halifax. The event
              gave me a chance to meet and network with senior leaders, students
              and innovators from different disciplines and backgrounds.
              <br />
              <br />
              <ul>
                <li>
                  Build roads for Rapid Transit Bus System (RTBS) on the
                  decommissioned railway tracks.
                </li>
                <li>
                  The RTBS is slow because it uses the same routes as the
                  regular buses.
                </li>
                <li>The new track will only be used by RTBS.</li>
              </ul>
              <br />
            </p>
            <Button
              className="mr-3"
              variant="outline-danger"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1hqZ4GshjiOsHt70t7pmCj3e-P70N5y5w/view?usp=sharing",
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

export default RailsToRoads;
