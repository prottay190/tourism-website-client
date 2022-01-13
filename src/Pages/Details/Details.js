import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const { serviceId } = useParams();
    const[service, setService] =useState({})
    
    useEffect( () =>{
        fetch(`https://thawing-escarpment-98208.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    
    return (
        <div>
           <div className="details-Container">
               <img  src={service.img} className='img-fluid center' alt='Responsive image'  />
               <h2>Name: {service.name}</h2>
               <p>Description: {service.description}</p>
               <h5>Packages: {service.packages}</h5>
               <h6>Price: ${service.price}</h6>
               <Link to="/shipping"><Button className='details-btn'>Order Now</Button> </Link>
           </div>
        </div>
    );
};

export default Details;