import React, { Component } from "react";
import { Col, Nav, Row, Container, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

class NavBar extends Component {
  state = {
    copyMessage: "",
  };

  copyToClipboard = () => {
    navigator.clipboard.writeText("rishabgupta98@gmail.com");
    this.setState({
      copyMessage: "Email Address has been copied to the clipboard",
    });
  };

  componentDidUpdate() {
    setTimeout(() => this.setState({ copyMessage: "" }), 3000);
  }

  render() {
    return (
      <div className="nav-bar">
        <Container>
          <Row className="justify-content-between">
            <Col>
              <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home" eventKey="link-0">
                    HOME
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/aboutme" eventKey="link-1">
                    ABOUT US
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">PROJECTS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">CONTACT</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col className="text-right">
              <Row className="justify-content-end">
                <Col sm={"auto"}>
                  <div onClick={this.copyToClipboard}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2x"
                      color="#a8a8a8"
                    />
                  </div>
                </Col>
                <Col sm={"auto"}>
                  <a target="_blank" href="https://github.com/rishabgupta94">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      color="#a8a8a8"
                    />
                  </a>
                </Col>
                <Col sm={"auto"}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/rishabgupta98/"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2x"
                      color="#a8a8a8"
                    />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
          {this.state.copyMessage && (
            <Alert variant="secondary">{this.state.copyMessage}</Alert>
          )}
        </Container>
      </div>
    );
  }
}

export default NavBar;
