import React, { Component } from "react";

class DevelopedBy extends Component {
  state = {};
  render() {
    return (
      <div className="developed-by">
        <div style={{ height: "5vh" }} />
        <div className="text-center text-white">
          © Developed by
          <span style={{ color: "#d24d57" }}>&nbsp;&nbsp;RISHAB GUPTA</span>
        </div>
        <div style={{ height: "5vh" }} />
      </div>
    );
  }
}

export default DevelopedBy;
