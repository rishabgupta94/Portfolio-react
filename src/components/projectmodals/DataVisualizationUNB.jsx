import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class DataVisualizationUNB extends Component {
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
                src={`${process.env.PUBLIC_URL}/UNB.png`}
                style={{ width: "100%" }}
              />
              Data Visualization UNB 2018
              <h6>Finalist</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              It was a national Data Visualization competition hosted by
              University of New Brunswick. The participants were challenged to
              use their problem solving, critical thinking and visualization
              skills to create something new and beneficial for the public using
              the power of open data.
              <br />
              <br />
              Hundreds of datasets available on the New Brunswick open data
              portal were skimmed to understand the type of data available.
              There was no place better than the official Fredericton Growth
              Strategy Document to look for the major problems faced by the city
              of Fredericton (capital of New Brunswick). One of the most focused
              goals of the city is to go Healthy and Green and to achieve this
              goal, the city envisions to become a less car reliant city.
              <br />
              <br />
              This was the gap which our team decided to fill using
              Fredericton’s bicycle datasets available on the portal. However,
              the datasets available were not enough to come up with a story and
              a recommendation. Therefore, multiple datasets like:
              <br />
              <ul>
                <li>Demographics</li>
                <li>Accidents</li>
                <li>Thefts</li>
                <li>Bike Racks</li>
                <li>Parks and Trails</li>
              </ul>
              from different sources were filtered and analyzed to meet the
              requirements.
            </p>
            <Button
              className="mr-3"
              variant="outline-danger"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1N9jY3r9hzLgB6Qys0yTQ3m4h1QLZcpMj/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Infographic{"  "}
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

export default DataVisualizationUNB;
