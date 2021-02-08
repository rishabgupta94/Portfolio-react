import React, { Component } from "react";
import "./MobileSidebar.css";

class MobileSidebar extends Component {
  state = {};
  render() {
    const {
      visibleSection,
      scrollTo,
      homeRef,
      aboutMeRef,
      projectsRef,
      contactRef,
    } = this.props;
    let menuVisible = "hide";
    if (this.props.menuVisible) {
      menuVisible = "show";
    }
    return (
      <nav className={"mobile-sidebar " + menuVisible} id="sidebar">
        <div
          className={`header-link-mobile ${
            visibleSection === "home" ? "selected-mobile" : ""
          }`}
          onClick={() => scrollTo(homeRef)}
        >
          HOME
        </div>
        <div
          className={`header-link-mobile ${
            visibleSection === "about-me" ? "selected-mobile" : ""
          }`}
          onClick={() => scrollTo(aboutMeRef)}
        >
          ABOUT ME
        </div>
        <div
          className={`header-link-mobile ${
            visibleSection === "projects" ? "selected-mobile" : ""
          }`}
          onClick={() => scrollTo(projectsRef)}
        >
          PROJECTS
        </div>
        <div
          className={`header-link-mobile ${
            visibleSection === "contact" ? "selected-mobile" : ""
          }`}
          onClick={() => scrollTo(contactRef)}
        >
          CONTACT
        </div>
        <div className="header-link-mobile">
          <a
            target="_blank"
            href="https://portfolio-resume.s3.ca-central-1.amazonaws.com/Resume+-+Rishab+Gupta.pdf"
          >
            RESUME
          </a>
        </div>
      </nav>
    );
  }
}

export default MobileSidebar;
