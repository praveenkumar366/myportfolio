import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../About/About.css';

export default class About extends Component {
    render() {
        return (
            <Container className="about_cont">
                <Col>
                <h2 className="colorlib-heading">Who Am I?</h2>
                <p><strong>Hi I'm Praveen Kumar</strong> working as software developer.</p>
                <p>I'm inquisitive, energetics computer science specialist skilled,with a strong foundation in math, logic and cross-platform coding. Seeking to leverage solid skills in collaboration
											, communication and development as a programmer.
										</p>
                                        </Col>

                                        <Col>
                <span className="colorlib-span">PERSONAL</span>
                    <Container>
                        <div>Birthday :  <b>6 November 1994</b></div>
                        <div>Relationship :  <b>Single</b></div>
                        <div>Nationality :  <b>Indian</b></div>
                        <div>Languages :  <b>English, Malayalam, Hindi, Tamil</b></div>                        
                    </Container>
                                        </Col>

                                        <Col>
                <span className="colorlib-act">ACTIVITIES</span>
                    <ul>
                        <li>Student secretary for department’s first International Conferece Race’16.</li>
                        <li>Represented both college & school in various cultural programmes & sports meets.</li>
                    </ul>
                                        </Col>

                                    <Container>
                                    <span className="colorlib-act">HOBBIES</span>
                                        <Row>
                                            <Col>Football</Col>
                                            <Col>Riding</Col>
                                            <Col>Trekking</Col>
                                            <Col>Music</Col>
                                        </Row>
                                        <Row>
                                            <Col>Videogames</Col>
                                            <Col>Blogging</Col>
                                            <Col></Col>
                                            <Col></Col>
                                        </Row>
                                        </Container>
            </Container>
            
        )
    }
}
