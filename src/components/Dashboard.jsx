import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import MobileSidebar from "../mobile/MobileSidebar";
import Hamburger from "../mobile/MobileHeader";
import Comps from "./Content";
import Content from "./Content";

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

function Dashboard(params) {
  const [menuVisible, hanldeMenuVisible] = useState(false);
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
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
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;
      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });
      if (selected && selected.section !== visibleSection) {
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
    <div className="content">
      <div className="sticky">
        <Hamburger handleMenuClick={() => hanldeMenuVisible(!menuVisible)} />
        <MobileSidebar menuVisible={menuVisible} />
        <div className="header" ref={headerRef}>
          <Row className="justify-content-between">
            <Col sm="auto">
              <Row>
                <Col sm="auto">
                  <div
                    className={`header_link ${
                      visibleSection === "home" ? "selected" : ""
                    }`}
                    onClick={() => {
                      scrollTo(homeRef.current);
                    }}
                  >
                    Home
                  </div>
                </Col>
                <Col sm="auto">
                  <div
                    className={`header_link ${
                      visibleSection === "about-me" ? "selected" : ""
                    }`}
                    onClick={() => {
                      scrollTo(aboutMeRef.current);
                    }}
                  >
                    About Me
                  </div>
                </Col>
                <Col sm="auto">
                  <div
                    className={`header_link ${
                      visibleSection === "projects" ? "selected" : ""
                    }`}
                    onClick={() => {
                      scrollTo(projectsRef.current);
                    }}
                  >
                    Projects
                  </div>
                </Col>
                <Col sm="auto">
                  <div
                    className={`header_link ${
                      visibleSection === "contact" ? "selected" : ""
                    }`}
                    onClick={() => {
                      scrollTo(contactRef.current);
                    }}
                  >
                    Contact
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm="auto">
              <Row className="float-right h-100">
                <Col sm="auto" className="my-auto">
                  <div>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      color={"#999999"}
                      size="2x"
                    />
                  </div>
                </Col>
                <Col sm="auto" className="my-auto">
                  <div>
                    <FontAwesomeIcon
                      icon={faGithub}
                      color={"#999999"}
                      size="2x"
                    />
                  </div>
                </Col>
                <Col sm="auto" className="my-auto mr-3">
                  <div>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      color={"#999999"}
                      size="2x"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <Content
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </div>
  );
}

export default Dashboard;
