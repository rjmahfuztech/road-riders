import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="nav-style" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="nav-style" href="#blog">Blog</Nav.Link>
                        <Nav.Link className="nav-style" href="#service">Service</Nav.Link>
                        <Nav.Link className="nav-style" as={Link} to="/admin">Admin</Nav.Link>
                        <Nav.Link className="nav-style" href="#contact">Contact Us</Nav.Link>
                        <Nav.Link className="nav-style nav-end" as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;