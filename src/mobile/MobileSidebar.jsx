import React, { Component } from "react";
import "./MobileSidebar.css";

class MobileSidebar extends Component {
  state = {};
  render() {
    let menuVisible = "hide";
    if (this.props.menuVisible) {
      menuVisible = "show";
    }
    return (
      <nav className={"mobile-sidebar " + menuVisible} id="sidebar">
        <div className="header-link-mobile">HOME</div>
        <div className="header-link-mobile">ABOUT ME</div>
        <div className="header-link-mobile">PROJECTS</div>
        <div className="header-link-mobile">CONTACT</div>
      </nav>
    );
  }
}

export default MobileSidebar;
