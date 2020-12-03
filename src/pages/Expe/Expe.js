import React, { Component, Fragment } from "react";
import exp_data from "./experience.json";
import "../Expe/Exp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default class Expe extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h2 className="head_exp">Experience</h2>
        </Container>
        <Container className="mt-5">
          {exp_data
            .slice(0)
            .reverse()
            .map((exp_data) => {
              return (
                <Row key={exp_data.post}>
                  <Col lg="1" className="icon_div">
                    <FontAwesomeIcon icon={faPencilAlt} id="iconi" />
                  </Col>
                  <Col lg="9">
                    <div key={exp_data.post} className="first_div">
                      <h2 className="heading">
                        <strong>{exp_data.post}</strong>
                        {"\n"}
                        <small>{exp_data.date}</small>
                      </h2>
                      <div className="desc">
                        <span>{exp_data.company}</span>
                        <div id="work_exp">{exp_data.descrition.map((new_data) => { return (
							<ul key={new_data}>
								<li>{new_data}</li>
							</ul>
						);})}</div>
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
        </Container>
      </Fragment>
    );
  }
}
