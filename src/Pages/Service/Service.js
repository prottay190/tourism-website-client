import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, img, name, description, packages, price } = service;
    return (
        <Col className="single-hotel-card">
            <Card>
                <Card.Img variant="top" src={img} className="hotel-card-img" />
                <Card.Body className="text-start">
                    <Card.Title className="hotel-name">{name}</Card.Title>
                    <Card.Text>{description.slice(0, 100)}.....</Card.Text>
                    <Card.Text> <span className='c-text'>Package: {packages}</span></Card.Text>
                    <Card.Text> <span className='c-text'>Price: ${price}</span></Card.Text>
                    <Link to={`/detail/${_id}`}> <button className="btn btn-primary">Show Details</button> </Link> <br />
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;




// <Col>
// <Card className="m-2" style={{ width: '22rem'}}>
//     <Card.Img className="img-fluid" variant="top" src={img} />
//     <Card.Body>
//     <Card.Title>Name: {name}</Card.Title>
//     <Card.Text>
//         <h6>Package: {packages}</h6>
//         <p>Description: {description}</p>
//         <h4>Price: {price}</h4>
//     </Card.Text>
//      <Link to={`/detail/${_id}`}> <button className="btn btn-primary">Show Details</button> </Link> <br />
//      <Link to="/order"><button className="btn btn-primary" style={{marginTop: '8px'}}>Purchase Order</button></Link>
//     </Card.Body>
// </Card>
// </Col>