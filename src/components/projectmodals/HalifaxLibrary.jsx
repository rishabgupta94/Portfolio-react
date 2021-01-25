import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class HalifaxLibrary extends Component {
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
                src={`${process.env.PUBLIC_URL}/halifaxlibrary.jpg`}
                style={{ width: "100%" }}
              />
              Halifax Public Library
              <h6>Class Assignment</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span style={{ fontWeight: "bold" }}>Technologies used:</span>
            {"  "}
            <span>React, AWS, IoT</span>
            <br />
            <br />
            <p>
              The project was focused to improve the existing database design of
              the library. The library has the data about various magazine
              publications, their customers and monthly expenses of the
              employees. The library has come up with three immediate plans.
              <br />
              <br />
              <ul>
                <li>To record all articles for each magazine</li>
                <li>To record transaction history</li>
                <li>To record monthly expenses</li>
              </ul>
              An EER diagram was created to understand all the data requirements
              and identify the entities, relationships and its attributes. All
              the relations were normalized to 3NF and a relational database
              schema was created. The raw data was available in json formats
              which was cleaned and then imported into the newly created SQL
              tables. A PHP web application was created to allow the users to
              access the database.
              <br />
              <br />
              The library employees can now conveniently record the
              books/magazines issued, access articles and fetch the customer
              details. The payroll team can fetch the employee details and their
              daily logged work hours for easy payroll.
            </p>
            <Button
              className="mr-3"
              variant="outline-danger"
              onClick={() =>
                window.open(
                  "https://github.com/rishabgupta94/Halifax-Public-Library-PHP-SQL-Application",
                  "_blank"
                )
              }
            >
              Github{"  "}
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

export default HalifaxLibrary;
