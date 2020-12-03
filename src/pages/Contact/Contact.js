import { faEnvelope, faMap, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../Contact/Contact.css';

export default function Contact() {
    return (
        <Container>
            <Row id="addr_row"><FontAwesomeIcon icon={faPhone} />+916282843691</Row>
            <Row id="addr_row"><FontAwesomeIcon icon={faMapMarkedAlt} /> Bur Dubai, Dubai, United Arab Emirates</Row>
            <Row id="addr_row"><FontAwesomeIcon icon={faMap} /> Arunnootimangalam, Mavelikara, Alapuzha, Kerala, India</Row>
            <Row id="addr_row"><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:r4praveen121@gmail.com">r4praveen121@gmail.com</a></Row>
        </Container>
    )
}
