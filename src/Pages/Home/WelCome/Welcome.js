import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCarSide, FaHotel, FaConciergeBell } from 'react-icons/fa';

const Welcome = () => {
    return (
        <div className="p-5">
            <h2>Welcome Our Traveling World <br />
                & make your Holiday
            </h2>
            <p style={{fontSize: '22px', lineHeight: '1.5', marginTop: '30px'}}>travel from place to place, especially on foot and with the suggestion of  a roundabout route.Trusted results for Your <br /> Search Query. Check  Visymo Search for the best results! Unlimited Access. 100% Secure. Always Facts.Privacy Friendly. <br /> The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search.</p>
            <Container>
                <Row>
                <Col>
                <FaCarSide style={{color: '#E6B0AA', fontSize: '80px'}}/>
                <h2 style={{color: '#2ECC71', marginTop: '10px'}}>- Travel -</h2>
                </Col>
                <Col>
                <FaHotel style={{color: '#E6B0AA', fontSize: '80px'}}/>
                <h2 style={{color: '#2ECC71', marginTop: '10px'}}>- Hotel -</h2>
                </Col>
                <Col>
                <FaConciergeBell style={{color: '#E6B0AA', fontSize: '80px'}}/>
                <h2 style={{color: '#2ECC71', marginTop: '10px'}}>- Food -</h2>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;