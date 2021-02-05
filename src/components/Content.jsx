import React, { Component } from "react";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import "./Content.css";
import Contact from "./sections/Contact";
import DevelopedBy from "./sections/DevelopedBy";

const Content = (props) => {
  return (
    <>
      <div className="section" id="home" ref={props.homeRef}>
        <div className="page-spacer" />
        <Home aboutMeRef={props.aboutMeRef} scrollTo={props.scrollTo} />
        <div className="page-spacer" />
      </div>
      <div className="section" id="about-me" ref={props.aboutMeRef}>
        <Skills />
        <Experience />
      </div>
      <div className="section" id="projects" ref={props.projectsRef}>
        <Projects />
      </div>
      <div className="section" id="contact" ref={props.contactRef}>
        <Contact />
        <DevelopedBy />
      </div>
    </>
  );
};

export default Content;
