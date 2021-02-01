import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button, Row, Col } from "react-bootstrap";

class MobileHeader extends Component {
  state = {};
  render() {
    return (
      <div className="mobile-header">
        <Row className="justify-content-between">
          <Col>
            <Button
              variant="outline-none"
              className="hamburger"
              onClick={this.props.handleMenuClick}
            >
              <FontAwesomeIcon icon={faBars} size="2x" />
            </Button>
          </Col>
          <Col>
            <Row className="float-right h-100">
              <Col className="my-auto">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color={"#999999"}
                  size="2x"
                />
              </Col>
              <Col className="my-auto">
                <FontAwesomeIcon icon={faGithub} color={"#999999"} size="2x" />
              </Col>
              <Col className="my-auto mr-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color={"#999999"}
                  size="2x"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MobileHeader;
