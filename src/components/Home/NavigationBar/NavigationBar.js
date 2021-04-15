import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#team">Our Team</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;