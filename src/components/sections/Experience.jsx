import React, { Component } from "react";
import { Card, Container, Row, Col, Accordion } from "react-bootstrap";
import "./Experience.css";

class Experience extends Component {
  state = {};
  render() {
    return (
      <div className="experience">
        <div className="title-margin-top" />
        <h1 className="text-center title">EXPERIENCE</h1>
        <div className="title-margin" />
        <Container>
          <Accordion>
            <Card className="mb-5">
              <Accordion.Toggle eventKey="0">
                <Card.Header>
                  <text className="company">Perennia Food & Agriculture</text>
                  <br />
                  <text className="position">
                    Software Developer - Data Analyst
                  </text>
                  <br />
                  <text className="other">Nov 2019 - Present</text>
                  <br />
                  <text className="other">Halifax, Canada</text>
                </Card.Header>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="perennia">
                  {/* <Card.Text> */}
                  <ul>
                    <li>
                      Led my team to follow the agile software development
                      process
                    </li>
                    <li>
                      Created the dashboard design in AdobeXD and did customer
                      surveys for improvements
                    </li>
                    <li>
                      Coded the dashboard in React and used ChartJS for graphs
                    </li>
                    <li>
                      Used AWS services to create APIs, add authentication,
                      storage and host the wesbite
                    </li>
                    <li>
                      Collaborating with potential customers to get constant
                      feedback
                    </li>
                  </ul>
                  {/* </Card.Text> */}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion>
            <Card className="mb-5 mt-5">
              <Accordion.Toggle eventKey="0">
                <Card.Header>
                  <text className="company">St. Mary's University</text>
                  <br />
                  <text className="position">
                    Financial Text Analytics - Internship
                  </text>
                  <br />
                  <text className="other">May 2019 - Aug 2019</text>
                  <br />
                  <text className="other">Halifax, Canada</text>
                </Card.Header>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="st-mary">
                  <Card.Text>
                    <ul>
                      <li>
                        Automated the data collection process to collect the
                        financial data of 1000 firms from SEC
                      </li>
                      <li>
                        Performed data cleaning, textual processing and analysis
                        on the unstructured data for information retrieval
                      </li>
                      <li>
                        The extracted information will be used in the research
                        to convey insights about firms’ systematic risks, which
                        is the major component of the cost of capital of the
                        firms
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion>
            <Card className="mt-5">
              <Accordion.Toggle eventKey="0">
                <Card.Header>
                  <text className="company">Optymyze</text>
                  <br />
                  <text className="position">Quality Assurance Engineer</text>
                  <br />
                  <text className="other">July 2016 - Aug 2018</text>
                  <br />
                  <text className="other">Pune, India</text>
                </Card.Header>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="optymyze">
                  <Card.Text>
                    <ul>
                      <li>
                        Being the feature owner of "Workflows"; I ensured that a
                        thorough testing is done with minimum of 95% confidence
                        coverage and bug rate less than 1%
                      </li>
                      <li>
                        Recognized for outstanding management of mobile platform
                        testing program
                      </li>
                      <li>
                        Co-ordinate with cross-functional teams to deliver
                        products as per the road map deadline
                      </li>
                      <li>
                        To make sure the code is bug and defect free before
                        committing it to the master
                      </li>
                      <li>
                        To write and maintain the scripts for regression
                        testing, reducing the manual effort
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
        <div className="page-spacer" />
      </div>
    );
  }
}

export default Experience;
