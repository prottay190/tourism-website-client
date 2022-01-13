import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Banner from '../Home/Banner/Banner';
import {  FaPhoneSquareAlt,  FaFacebook,  FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <>
           <div className='contact-container'>
                <h2 style={{ color: '#323232'}}>Contact us</h2>
                <a className='link-btn' href="/home">Home</a>/
                <a className='link-btn' href="/contact">ContactUs</a>
            </div>
            <div className="p-5">
                <h2 style={{color: '#FF7F50'}}>Contact Now</h2>
                <Container>
                    <Row className="p-5">
                        <Col style={{textAlign: 'left'}}>
                        <h3> HotLIne: traveling.world@gmail.com</h3>
                        <h3><FaPhoneSquareAlt /> Our TelePhone: 01441141111</h3>
                        <h4><FaEnvelope /> Our Email: aarnob2020@gmail.com</h4>
                        <h4><FaFacebook /> Our faceBook : Traveling World</h4>
                        </Col>
                        <Col>
                        <p style={{textAlign: 'left', fontSize: '18px'}}>Traveling or travelling depends on where is your audience.travel ticketing platform that automates all your needs. we are provice The best Service.Mandatory State of Hawaii Travel and Health Form.The Safe Travels Hawaii program is a multilayered process designed to protect the health and safety.</p>
                        </Col>    
                    </Row>
                </Container>
            </div>
            
        </>
    );
};

export default Contact;