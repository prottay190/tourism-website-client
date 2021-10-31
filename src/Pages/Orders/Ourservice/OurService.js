import React  from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Service/Service';
import './Ourservices.css';

const OurService = ({os}) => {
     const {name, img, price, packages} = os;

     const handleDelete = id =>{
        const url = `https://thawing-escarpment-98208.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Successfully deleted')

            }
        })

    }
    return (
        <div className="os-container">
            <div>
             <img src={img} alt="" />
            </div>
            <div className="os-text">
               <h2>Name: {name}</h2>
               <h5>Packages: {packages}</h5>
               <h3>Price: {price}</h3>
               <button onClick={() => handleDelete(Service._id) }>Delete</button>
               <Link to="/shipping"> <button>Order Now</button> </Link>
            </div>
        </div>
    );
};

export default OurService;