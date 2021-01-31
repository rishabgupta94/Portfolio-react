import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

class Hamburger extends Component {
  state = {};
  render() {
    return (
      <Button variant="outline-none" className="hamburger">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </Button>
    );
  }
}

export default Hamburger;
