import React, { Component } from "react";

class DevelopedBy extends Component {
  state = {};
  render() {
    return (
      <div className="developed-by">
        <div style={{ height: "5vh" }} />
        <div className="text-center text-white" style={{ fontSize: "17px" }}>
          © Developed by
          <span style={{ color: "#d24d57" }}>&nbsp;&nbsp;RISHAB GUPTA</span>
        </div>
        <div
          className="text-center"
          style={{ color: "#969696", fontSize: "14px" }}
        >
          Coded in React; Deployed on AWS
        </div>
        <div style={{ height: "5vh" }} />
      </div>
    );
  }
}

export default DevelopedBy;
