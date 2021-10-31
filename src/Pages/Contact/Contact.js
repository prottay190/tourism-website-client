import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Banner from '../Home/Banner/Banner';
import {  FaPhoneSquareAlt,  FaFacebook,  FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="p-5">
                <h2>Contact Now</h2>
                <Container>
                    <Row className="p-5">
                        <Col>
                        <h3> HotLIne: traveling.world@gmail.com</h3>
                        <h3><FaPhoneSquareAlt /> Our TelePhone: 0984515744711</h3>
                        <h4><FaEnvelope /> Our Email: aarnob2020@gmail.com</h4>
                        <h4><FaFacebook /> Our faceBook : Traveling World</h4>
                        </Col>
                        <Col>
                        <p>Traveling or travelling depends on where is your audience.travel ticketing platform that automates all your needs. we are provice The best Service.Mandatory State of Hawaii Travel and Health Form.The Safe Travels Hawaii program is a multilayered process designed to protect the health and safety.</p>
                        </Col>    
                    </Row>
                </Container>
            </div>
            
        </div>
    );
};

export default Contact;