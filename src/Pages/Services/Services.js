import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container services-section">
            <h2>Our Services</h2>
            <div className="container">
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service = {service}
                        ></Service>)
                }
            </Row>
            </div>          
        </div>
    );
};

export default Services;