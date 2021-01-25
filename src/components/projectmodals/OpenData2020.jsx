import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class OpenData2020 extends Component {
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
                src={`${process.env.PUBLIC_URL}/recycling.jpg`}
                style={{ width: "100%" }}
              />
              NS Open Data 2020
              <h6>Secured 2nd place</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              In these times, it is critical for our society to embrace all
              possible means of environmental conservation. My team and I came
              up with an idea to incentivize the recycling process in Halifax.
              <br />
              <br />
              <ul>
                <li>
                  User will order a ziptag from the application. Ziptag will
                  have a unique barcode.
                </li>
                <li>
                  User will use the ziptag to tie his recycling bag before
                  putting it on the curb
                </li>
                <li>
                  The user will be rewarded via the application based on the
                  weight of the recycling bag.
                </li>
              </ul>
              <br />
            </p>
            <Button
              className="mr-3"
              variant="outline-danger"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1tzI8brELa-lt9SEasrt-xG91Sx0IGPV8/view?usp=sharing",
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

export default OpenData2020;
