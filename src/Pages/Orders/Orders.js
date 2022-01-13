import React, { useEffect, useState } from 'react';
import OurService from './Ourservice/OurService';
import './Orders.css'



const Orders = () => {
    const [ourServices, setOurServices] = useState([]);
    useEffect(() =>{
        fetch('https://thawing-escarpment-98208.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setOurServices(data))
    },[])
    return (
     <>
     <h2 className='order p-5'>Most Valuable Services</h2>
       <div className="order-container">
            <div className="order-text">
            {
               ourServices.map(os => <OurService
                  key={os._id}
                  os ={os}
               ></OurService>)
            }
        </div>
       </div>
     </>
    );
};

export default Orders;