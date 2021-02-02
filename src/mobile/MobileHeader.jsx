import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button, Row, Col, Alert } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

class MobileHeader extends Component {
  state = {
    copyMessage: "",
  };

  componentDidUpdate() {
    setTimeout(() => this.setState({ copyMessage: "" }), 5000);
  }

  onCopy = () => {
    this.setState({
      copyMessage: "Email address has been copied to the clipboard",
    });
  };

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
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/rishabgupta98/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color={"#999999"}
                    size="2x"
                  />
                </a>
              </Col>
              <Col className="my-auto">
                <a target="_blank" href="https://github.com/rishabgupta94">
                  <FontAwesomeIcon
                    icon={faGithub}
                    color={"#999999"}
                    size="2x"
                  />
                </a>
              </Col>
              <Col className="my-auto mr-2">
                <CopyToClipboard
                  onCopy={this.onCopy}
                  text={"rishabgupta98@gmail.com"}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color={"#999999"}
                    size="2x"
                  />
                </CopyToClipboard>
              </Col>
            </Row>
          </Col>
        </Row>
        {this.state.copyMessage && (
          <Alert variant="secondary" className="text-center">
            <h5>{this.state.copyMessage}</h5>
          </Alert>
        )}
      </div>
    );
  }
}

export default MobileHeader;
