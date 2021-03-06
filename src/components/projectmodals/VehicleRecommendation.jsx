import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class VehicleRecommendation extends Component {
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
                src={`${process.env.PUBLIC_URL}/vehicle.jpg`}
                style={{ width: "100%" }}
              />
              Vehicle Recommendation
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span style={{ fontWeight: "bold" }}>Technologies used:</span>
            {"  "}
            <span>Tableau, MS Excel</span>
            <br />
            <br />
            <p>
              The purpose of this project was to give a recommendation to a
              customer, who intends to buy a car and has expressed a certain
              criteria that are important in her decision. Analysis and feature
              engineering of the data was performed to extract the information
              from the variables with an aim to provide a reasonable
              recommendation.
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
            <Button
              variant="outline-danger"
              onClick={() =>
                window.open(
                  "https://github.com/rishabgupta94/Recommendation-for-Vehicle-Purchase/blob/master/Report.pdf",
                  "_blank"
                )
              }
            >
              Report{"  "}
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

export default VehicleRecommendation;
