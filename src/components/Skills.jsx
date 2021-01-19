import React, { Component } from "react";
import { Badge, Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import "./Skills.css";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div className="skills">
        <h1 className="text-center mb-5">Skills</h1>
        <Container>
          <Table responsive bordered>
            <tbody>
              <tr>
                <th>AWS Certified Solutions Architect</th>
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
      </div>
    );
  }
}

export default Skills;
