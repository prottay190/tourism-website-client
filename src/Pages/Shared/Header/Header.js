import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
import { FaSeedling } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
    const {user, logOut} = useAuth();
    // console.log(user)
    return (
        <>
        <Navbar className="header p-4" bg="light" variant="light" sticky='top' collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand className="nav-title" style={{fontSize: '25px'}} href="#home"><FaSeedling  style={{color: '#28B463'}}/> <span style={{color: '#28B463'}}>Traveling</span>World </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link}  to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/addServices">Add-Service</Nav.Link>
            <Nav.Link as={Link} to="/order"> MyOrder</Nav.Link>  
            <Nav.Link as={Link} to="/moreservice">Extra-Service</Nav.Link>  
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