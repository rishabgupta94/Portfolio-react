import React, { Component } from "react";
import { Row, Col, Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import "./Contact.css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    error: false,
    showAlert: false,
    showErrorAlert: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      body: `{"name": "${this.state.name}", "email": "${this.state.email}", "message": "${this.state.message}" }`,
    };
    try {
      let response = await axios.post(
        "https://3ep0mukzzc.execute-api.ca-central-1.amazonaws.com/Prod/portfolio",
        data
      );
      this.setState({ name: "", email: "", message: "", showAlert: true });
    } catch (e) {
      this.setState({ showErrorAlert: true });
      console.log(e);
    }
  };

  handleChange = (e) => {
    let contact = { ...this.state };
    contact[e.currentTarget.name] = e.currentTarget.value;
    this.setState(contact);
  };

  handleAlertClose = () => {
    this.setState({ showAlert: false, showErrorAlert: false });
  };

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
          className="svgcolor-light"
        >
          <path d="M0 0 L50 100 L100 0 Z" fill="#f8f7f6" stroke="white"></path>
        </svg>

        <div className="title-margin-top" />
        <h1 className="text-center title text-white contact-title">
          LET'S CREATE SOMETHING GREAT
        </h1>
        {/* <Button onClick={this.handleSubmit}>Test Button</Button> */}
        <h5 className="text-center text-white contact-sub-title">
          Have a question or want to work together?
        </h5>
        <div className="title-margin" />
        <Container className="contact-container">
          {this.state.showErrorAlert && (
            <Row className="justify-content-center">
              <Col sm={6} className="text-center">
                <Alert
                  variant="warning"
                  onClose={this.handleAlertClose}
                  dismissible
                >
                  Unfortunately, there was some error. I apologize for the
                  inconvenience. You may send me an email at{" "}
                  <span style={{ fontWeight: "bolder" }}>
                    rishabgupta98@gmail.com
                  </span>
                </Alert>
              </Col>
            </Row>
          )}

          {this.state.showAlert && (
            <Row className="justify-content-center">
              <Col sm={6} className="text-center">
                <Alert
                  variant="success"
                  onClose={this.handleAlertClose}
                  dismissible
                >
                  Thank You for contacting me. I will get back to you within 24
                  hours
                </Alert>
              </Col>
            </Row>
          )}
          <Form onSubmit={this.handleSubmit}>
            <Row className="justify-content-center">
              <Col sm={4}>
                <Form.Group>
                  <Form.Control
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={4}>
                <Form.Group>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={4}>
                <Form.Group>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    required
                  />
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
