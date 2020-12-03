import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import skill_data from "./myskills.json";
import "../Skills/Skills.css";

export default function Skills() {
  //   console.log(skill_data);
  return (
    <Fragment>
      <h1>Skills</h1>
      <Container>
        {skill_data.map((skill_data, index) => {
          const perc = "%";
          const styles = {
            width: skill_data.percent + perc,
          };
          console.log(styles);
          return (
            <Row key={skill_data.skill} className="main_row">
              {
                <Col lg="12">
                  <div className="progress-wrap">
                    <h3 className="headi_skill">{skill_data.skill}</h3>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={styles}
                      >
                        <span>{skill_data.percent}%</span>
                      </div>
                    </div>
                  </div>
                </Col>
              }
            </Row>
          );
        })}
      </Container>
    </Fragment>
  );
}
