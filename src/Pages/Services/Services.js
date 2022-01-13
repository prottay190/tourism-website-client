import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://thawing-escarpment-98208.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services-contain p-5">
                <h2 style={{ color: '#fff', padding: '20px' }}>Our Services</h2>
                <Container className='my-5'>
                <Row lg={3} md={2} sm={1} xs={1} className="g-4">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </Row>
                </Container>        
        </div>
    );
};

export default Services;




{/* <Container className="services-section">
<h2 style={{color: '#F39C12', padding: '20px'}}>Our Services</h2>
<Row lg={3} md={2} sm={1} xs={1} className="g-4">
    {
        services.map(service => <Service
            key={service._id}
            service = {service}
            ></Service>)
    }
</Row>
</Container> */}