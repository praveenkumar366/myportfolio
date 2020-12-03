import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "./education.json";
import '../Educ/Educ.css';

export default class Educ extends Component {
  render() {
    // console.log(this.state.data);
    return (
      <Fragment>
          <Container className="head_educ">
              <h2>Education</h2>
          </Container>
        <Container>
          {data
            .slice(0)
            .reverse()
            .map((data) => {
              return (
                <Container key={data.year} className="main_d">
                    <h2 className="educ_head">{data.course}</h2>
                    <Row className="educ_row">
                    <Col lg="4">
                    <strong>{data.university}</strong>
                    <br />
                    <b>{data.year}</b>
                  </Col>
                  <Col lg="8">
                    <p>
                      {data.institution} <br /> CGPA : <b>{data.GPA}</b>
                    </p>
                  </Col>
                    </Row>
                </Container>
              );
            })}
        </Container>
      </Fragment>
    );
  }
}
