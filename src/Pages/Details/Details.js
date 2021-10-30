import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const { serviceId } = useParams();
    const[service, setService] =useState({})
    
    useEffect( () =>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    
    return (
        <div>
           <h2>Service Id: {serviceId}</h2>
           <div className="details-Container">
               <img src={service.img} alt="" />
               <h2>name: {service.name}</h2>
               <h5>Packages: {service.packages}</h5>
               <h6>Price: {service.price}</h6>
               <p>Description: {service.description}</p>
           </div>
        </div>
    );
};

export default Details;