import React from 'react';
import { Form, Button} from 'react-bootstrap';
import './Shipping.css'

const Shipping = () => {
    const handleOnSubmit = e =>{
        alert('Order Pace successfuly')
        e.preventDefault();
    }
    return (
        <div className="shipping-container p-5">
            <h1 className="p-3" style={{color: '#28B463 '}}>Please Give Your Information</h1>
            <Form onClick={handleOnSubmit} className="from-container"> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Your Name" />   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">           
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Address" />   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Phone-Number" />   
                </Form.Group>
                <Button style={{padding: '10px 20px',fontSize: '20px' }} variant="warning">Pace Order</Button>
            </Form>
        </div>
    );
};

export default Shipping;
