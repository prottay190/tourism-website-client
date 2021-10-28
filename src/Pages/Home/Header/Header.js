import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <>
        <Navbar className=" p-4" bg="light" variant="light" sticky='top' collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand className="nav-title" href="#home"> tourism  </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link  href="/home">Home</Nav.Link>
            <Nav.Link  href="#services">Service</Nav.Link>
            <Nav.Link href="#doctors">Doctors</Nav.Link> 
            <Navbar.Text>
               Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
};

export default Header;