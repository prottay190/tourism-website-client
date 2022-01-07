import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Gallery.css'
import img1 from '../../../images/gallery/download (1).jpg';
import img2 from '../../../images/gallery/download (2).jpg';
import img3 from '../../../images/gallery/download (3).jpg';
import img4 from '../../../images/gallery/images (2).jpg';
import img5 from '../../../images/gallery/images (3).jpg';
import img6 from '../../../images/gallery/images (4).jpg';
import img7 from '../../../images/gallery/images (5).jpg';
import img8 from '../../../images/gallery/images (7).jpg';


const Gallery = () => {
    return (
        <div className="gallery-container p-5">
            <h2> Our Photo Gallery</h2>
            <Container className="m-4">
                <Row className="row-container m-4">
                    <Col lg={4} md={5} sm={12}>
                    <img src={img1} className='img-fluid' alt='Responsive image' />
                    </Col>
                    <Col lg={4} md={5} sm={12}>
                      <img src={img2} className='img-fluid' alt='Responsive image' />
                    </Col>
                    <Col lg={4} md={5} sm={12}>
                    <img src={img3} className='img-fluid' alt='Responsive image'/>
                    </Col>
                </Row>
                <Row className="row-container m-4">
                    <Col lg={4} md={5} sm={12}>
                     <img src={img4} className='img-fluid' alt='Responsive image' />
                    </Col>
                    <Col lg={4} md={5} sm={12}>
                    <img src={img5} className='img-fluid' alt='Responsive image'/>
                    </Col>
                    <Col lg={4} md={5} sm={12}>
                      <img src={img7} className='img-fluid' alt='Responsive image'/>
                    </Col>
                </Row>
                <Row className="row-container m-4">
                    <Col lg={4} md={5} sm={12}>
                    <img src={img8} className='img-fluid' alt='Responsive image' />
                    </Col>
                    <Col lg={4} md={5} sm={12}>
                     <img src={img6} className='img-fluid' alt='Responsive image'/>
                    </Col>
                    <Col>
                    </Col>
                </Row> 
            </Container>
        </div>
    );
};

export default Gallery;