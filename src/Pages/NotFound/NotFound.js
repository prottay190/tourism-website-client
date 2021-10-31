import React from 'react';
import img from '../../images/notFound/notfound.jpg'

const NotFound = () => {
    return (
        <div className="p-2">
            <img className="img-fluid" src={img} alt="" />
        </div>
    );
};

export default NotFound;