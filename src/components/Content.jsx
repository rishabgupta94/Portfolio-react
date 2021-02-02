import React, { Component } from "react";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import "./Content.css";

const Content = (props) => {
  return (
    <>
      <div className="section" id="home" ref={props.homeRef}>
        <div className="page-spacer" />
        <Home />
        <div className="page-spacer" />
      </div>
      <div className="section" id="about-me" ref={props.aboutMeRef}>
        <Skills />
        <Experience />
      </div>
      <div className="section" id="projects" ref={props.projectsRef}>
        <Projects />
      </div>
      <div className="section" id="contact" ref={props.contactRef} />
    </>
  );
};

export default Content;
