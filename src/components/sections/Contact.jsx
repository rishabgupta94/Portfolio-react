import React, { Component } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import "./Contact.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          class="svgcolor-light"
        >
          <path d="M0 0 L50 100 L100 0 Z" fill="#f8f7f6" stroke="white"></path>
        </svg>

        <div className="title-margin-top" />
        <h1 className="text-center title text-white contact-title">
          LET'S CREATE SOMETHING GREAT
        </h1>
        <h5 className="text-center text-white contact-sub-title">
          Have a question or want to work together?
        </h5>
        <div className="title-margin" />
        <Container className="contact-container">
          <Form>
            <Row className="justify-content-center">
              <Col sm={4}>
                <Form.Group>
                  <Form.Control placeholder="Name" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={4}>
                <Form.Group>
                  <Form.Control placeholder="Email" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={4}>
                <Form.Group>
                  <textarea className="form-control" placeholder="Message" />
                </Form.Group>
              </Col>
            </Row>
            <div style={{ height: "5vh" }} />
            <Row className="justify-content-center">
              <Col sm={4} className="text-center">
                <Button variant="outline-light" type="submit" size="lg" block>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
        <div className="title-margin" />
      </div>
    );
  }
}

export default Contact;
