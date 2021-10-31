import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    // console.log(user)
    return (
        <>
        <Navbar className="p-4" bg="light" variant="light" sticky='top' collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand className="nav-title" href="#home"> tourism  </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link  href="/home">Home</Nav.Link>
            <Nav.Link  href="/addServices">Add-Service</Nav.Link>
            <Nav.Link href="/order">Order</Nav.Link>  
            {user.email ?
                <Button onClick={logOut}>LogOut</Button> :
                <Nav.Link href="/login">LogIn</Nav.Link>
            }
                
            <Navbar.Text>
               Signed in as: <a href="#login">{user.displayName}</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
        </>
    );
};

export default Header;