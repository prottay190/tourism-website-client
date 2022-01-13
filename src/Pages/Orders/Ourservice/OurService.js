import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../../Service/Service';
import './Ourservices.css';

const OurService = ({ os }) => {
    const { name, img, price, packages, description } = os;

    const handleDelete = id => {
        const url = `https://thawing-escarpment-98208.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Successfully deleted')

                }
            })

    }
    return (
        <Col className="single-services">
            <Card>
                <Card.Img variant="top" src={img} className="hotel-card-img" />
                <Card.Body className="text-start">
                    <Card.Title className="hotel-name">{name}</Card.Title>
                    <Card.Text>{description}.....</Card.Text>
                    <Card.Text> <span className='c-text'>Package: {packages}</span></Card.Text>
                    <Card.Text> <span className='c-text'>Price: ${price}</span></Card.Text>
                    <button className='shipping-btn' onClick={() => handleDelete(Service._id)}>Delete</button>

                    <Link to="/shipping"><button className='shipping-btn'>Order Now</button> </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default OurService;