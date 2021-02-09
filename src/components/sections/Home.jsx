import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <Container>
          <Row className="align-items-center">
            <Col
              className="order-sm-2 text-center mobile-margin col-sm"
              xs={12}
            >
              <img
                className="my-photo"
                src={`${process.env.PUBLIC_URL}/photo.jpg`}
              />
            </Col>
            <Col className="text-center order-sm-1">
              <text className="name">RISHAB GUPTA</text>
              <h6 className="sub-heading">AWS Certified Solutions Architect</h6>
              <h6 className="sub-heading">Front End Web Developer</h6>
              <Button
                className="get-to-know-me"
                variant="warning"
                onClick={() =>
                  this.props.scrollTo(this.props.aboutMeRef.current)
                }
              >
                <span className="know-me-text">Get to know me</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
