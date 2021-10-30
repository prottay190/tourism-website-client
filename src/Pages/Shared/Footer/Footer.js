import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FaElementor, FaPhoneSquareAlt, FaMobile, FaFacebook, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer p-5">
            <Container>
                <Row>
                   <Col lg={4} md={6} sm={12}>
                       <h3>Traveling World</h3>
                       <p className="footer-text">It’s wonderful to travel—to meet new people, see new places, experience different cultures, live life the way life is lived somewhere else.</p>
                       <br />
                       <h4 className="footer-text">Get Social</h4>
                       <small><FaFacebook style={{fontSize: '25px'}}/></small>
                       <small><FaInstagramSquare style={{fontSize: '25px', marginLeft: '15px'}}/></small>
                       <small><FaTwitterSquare style={{fontSize: '25px', marginLeft: '15px'}}/></small>
                       <small> <FaLinkedin style={{fontSize: '25px', marginLeft: '15px'}}/></small>
                      
                   </Col>
                   <Col lg={4} md={6} sm={12}>
                       <h3>Latest Update</h3>
                       <div className="footer-text">
                           <h6><FaElementor /> Together We Can Do So Much</h6>
                           <p>29 OCT 2021</p>
                       </div>
                       <div className="footer-text mt-2">
                           <h6><FaElementor /> Our Team</h6>
                           <p>30 OCT 2021</p>
                       </div>
                       <div className="footer-text mt-2">
                           <h6><FaElementor /> Together We Can Do So Much</h6>
                           <p>31 OCT 2021</p>
                       </div>
                   </Col>
                   <Col lg={4} md={6} sm={12}>
                       <h3>Contact</h3>
                       <div className="footer-text">
                           <p>Our HotLIne: traveling.world@gmail.com</p>
                           <p><FaPhoneSquareAlt /> Our TelePhone: 09845111782</p>
                           <p>Our Email: aarnob2020@gmail.com</p>
                           <p><FaMobile /> Our Mobile: 01711111110</p>
                       </div>
                   </Col>
                </Row>
                <Row>
                    <h5 className="footer-content ">© Copyright 2021 Hospital  - All Rights Reserved By Prottay Roy Arnob </h5>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;