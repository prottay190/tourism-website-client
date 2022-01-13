import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../Home/Banner/Banner';
import './MoreService.css';
import hotel1 from '../../images/hotel/download (1).jpg';
import hotel2 from '../../images/hotel/images (2).jpg';
import hotel3 from '../../images/hotel/images (3).jpg';

import food1 from '../../images/food/download (1).jpg';
import food2 from '../../images/food/images (2).jpg';
import food3 from '../../images/food/images (3).jpg';

const MoreService = () => {
    return (
        <div>
             <div className='contact-container'>
                <h2 style={{ color: '#323232'}}>About us</h2>
                <a className='link-btn' href="/home">Home</a>/
                <a className='link-btn' href="/moreservice">AboutUs</a>
            </div>
            <Banner></Banner>
            <div className="ms-container p-5">
                <h2 style={{color: '#F39C12', fontSize: '35px'}}>We Provide</h2>
                <div className="p-5">
                    <h2 style={{color: '#D35400 '}}>Best Hotels</h2>
                    <Container className="m-4">
                        <Row>
                            <Col>
                             <img className="img-fluid" src={hotel1} alt="" />
                            </Col>
                            <Col>
                              <img className="img-fluid" src={hotel2} alt="" />
                            </Col>
                            <Col>
                            <img src={hotel3} alt="" /></Col>
                        </Row>
                    </Container>
                </div>
                <div className="p-5">
                    <h2 style={{color: '#D35400'}}>Best Foods</h2>
                    <Container className="m-4">
                        <Row>
                            <Col>
                             <img src={food1} alt="" />
                            </Col>
                            <Col>
                              <img src={food2} alt="" />
                            </Col>
                            <Col>
                            <img src={food3} alt="" /></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default MoreService;