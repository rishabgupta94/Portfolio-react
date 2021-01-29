import { useEffect, useRef, useState } from "react";
// import { div } from "react-bootstrap";
import { Switch, Redirect, Route } from "react-router-dom";
import "./App.css";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function App() {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null)
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "home", ref: homeRef },
    { section: "about-me", ref: aboutMeRef },
    { section: "projects", ref: projectsRef },
    { section: "contact", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const {height: headerHeight} = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;
      const selected = sectionRefs.find(({section, ref}) => {
        const ele = ref.current;
        if(ele) {
          const {offsetBottom, offsetTop} = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });
      if(selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);



  return (
    <div className="app">
      {/* <div className="top-spacer" /> */}
      <div className="content">
        <div className="sticky">
          <div className="header" ref={headerRef}>
            <div
              className={`header_link ${visibleSection === "home" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(homeRef.current);
              }}
            >
              Home
            </div>
            <div
              className={`header_link ${visibleSection === "about-me" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(aboutMeRef.current);
              }}
            >
              About Me
            </div>
            <div
              className={`header_link ${visibleSection === "projects" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(projectsRef.current);
              }}
            >
              Projects
            </div>
            <div
              className={`header_link ${visibleSection === "contact" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(contactRef.current);
              }}
            >
              Contact
            </div>
            </div>
          </div>
          <div className="section" id="home" ref={homeRef}>
            <Home /></div>
          <div className="section" id="about-me" ref={aboutMeRef}>
          <Skills />
          <Experience /></div>
          <div className="section" id="projects" ref={projectsRef}>
            <Projects /></div>
          <div className="section" id="contact" ref={contactRef} />
        
        <div className="bottom-spacer" />
      </div>
      {/* <NavBar />
      <Switch>
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch> */}
    </div>
  );
}

export default App;
