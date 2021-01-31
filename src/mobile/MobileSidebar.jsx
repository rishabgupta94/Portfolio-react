import React, { Component } from "react";

class MobileSidebar extends Component {
  state = {};
  render() {
    return (
      <nav className="mobile-sidebar">
        <div id="sidebar-collapse">
          <div>HOME</div>
          <div>ABOUT ME</div>
          <div>PROJECTS</div>
          <div>CONTACT</div>
        </div>
      </nav>
    );
  }
}

export default MobileSidebar;
