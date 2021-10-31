import React from 'react';
import { Form, Button} from 'react-bootstrap';

const Shipping = () => {
    return (
        <div>
            <Form> 
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
                <Button variant="warning">Place Order</Button>
            </Form>
        </div>
    );
};

export default Shipping;
