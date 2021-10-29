import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-img-2.jpg';
import banner2 from '../../../images/banner/banner-img-1.jpg';
import banner3 from '../../../images/banner/banner-img-3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="banner-text">Book Your <br /> Dream Vacation Now</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className="banner-text">Book Your <br /> Dream Vacation Now</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="banner-text">Book Your <br /> Dream Vacation Now</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>  
        </>
    );
};

export default Banner;