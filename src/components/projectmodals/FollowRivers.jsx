import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class FollowRivers extends Component {
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
                src={`${process.env.PUBLIC_URL}/followriver.jpg`}
                style={{ width: "100%" }}
              />
              Follow River
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span style={{ fontWeight: "bold" }}>Technologies used:</span>
            {"  "}
            <span>Tableau</span>
            <br />
            <br />
            <p>
              <ul>
                <li>
                  Developed an interactive dashboard to monitor and visualize
                  the chemical pollution trends of NS rivers
                </li>
                <li>
                  Government can now publish annual reports used to influence
                  regulations for industrial waste handling
                </li>
                <li>
                  Intended audience: Fishermen and Real Estate professionals
                </li>
              </ul>
              <br />
              Tableau was used as a choice of visualization tool.
            </p>
            <Button
              className="mr-3"
              variant="outline-danger"
              onClick={() =>
                window.open(
                  "https://public.tableau.com/profile/rishab.gupta#!/vizhome/FollowRivers-OpenData/Dashboard1",
                  "_blank"
                )
              }
            >
              Tableau{"  "}
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

export default FollowRivers;
