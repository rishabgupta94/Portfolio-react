import React, { Component } from "react";
import { Badge, Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faReact } from "@fortawesome/free-brands-svg-icons";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div className="skills">
        <div className="title-margin-top" />
        <h1 className="text-center title">SKILLS</h1>
        <div className="title-margin" />
        <Container>
          <Row>
            <Col md={6} lg={3} className="text-center mb">
              <FontAwesomeIcon
                className="mb-3"
                icon={faAws}
                size="8x"
                color="#ff9a00"
              />
              <h4 className="skills-heading">AWS</h4>
              <text className="skills-desc">
                AWS Certified Solutions Architect
              </text>
            </Col>
            <Col md={6} lg={3} className="text-center mb">
              <FontAwesomeIcon
                className="mb-3"
                icon={faReact}
                size="8x"
                color="#61dafb"
              />
              <h4 className="skills-heading">REACT</h4>
              <text className="skills-desc">
                Intuitive UI/UX with responsive layouts
              </text>
            </Col>
            <Col md={6} lg={3} className="text-center mb">
              <img
                className="mb-3"
                src={`${process.env.PUBLIC_URL}/graph.png`}
              />
              <h4 className="skills-heading">VISUALIZATION</h4>
              <text className="skills-desc">
                A picture is worth a thousand words
              </text>
            </Col>
            <Col md={6} lg={3} className="text-center mb">
              <img
                className="agile mb-3"
                src={`${process.env.PUBLIC_URL}/Agile.png`}
              />
              <h4 className="skills-heading">AGILE</h4>
              <text className="skills-desc">
                Short iterations, quick delivery and constant collaboration
              </text>
            </Col>
          </Row>
          <Table responsive bordered className="mt-5">
            <tbody>
              <tr>
                <th>AWS</th>
                <td>
                  <Badge variant="info">EC2</Badge>
                </td>
                <td>
                  <Badge variant="info">Serverless</Badge>
                </td>
                <td>
                  <Badge variant="info">CI/CD</Badge>
                </td>
                <td>
                  <Badge variant="info">VPC</Badge>
                </td>
              </tr>
              <tr>
                <th>Front-End</th>
                <td>
                  <Badge variant="info">React</Badge>
                </td>
                <td>
                  <Badge variant="info">Jest/Enzyme</Badge>
                </td>
                <td>
                  <Badge variant="info">HTML</Badge>
                </td>
                <td>
                  <Badge variant="info">CSS</Badge>
                </td>
                <td>
                  <Badge variant="info">Bootstrap</Badge>
                </td>
              </tr>
              <tr>
                <th>Data Analysis</th>
                <td>
                  <Badge variant="info">Python</Badge>
                </td>
                <td>
                  <Badge variant="info">MS Excel</Badge>
                </td>
              </tr>
              <tr>
                <th>Databases</th>
                <td>
                  <Badge variant="info">SQL</Badge>
                </td>
                <td>
                  <Badge variant="info">DynamoDB</Badge>
                </td>
                <td>
                  <Badge variant="info">MongoDB</Badge>
                </td>
              </tr>
              <tr>
                <th>Visualization</th>
                <td>
                  <Badge variant="info">AdobeXD</Badge>
                </td>
                <td>
                  <Badge variant="info">Tableau</Badge>
                </td>
                <td>
                  <Badge variant="info">ChartJS</Badge>
                </td>
              </tr>
              <tr>
                <th>Others</th>
                <td>
                  <Badge variant="info">GIT</Badge>
                </td>
                <td>
                  <Badge variant="info">JIRA</Badge>
                </td>
                <td>
                  <Badge variant="info">Agile</Badge>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <div className="page-spacer" />
      </div>
    );
  }
}

export default Skills;
