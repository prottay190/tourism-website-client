import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('https://thawing-escarpment-98208.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container services-section">
            <h2 style={{color: '#F39C12', padding: '20px'}}>Our Services</h2>
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