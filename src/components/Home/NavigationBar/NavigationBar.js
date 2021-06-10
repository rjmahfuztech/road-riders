import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { signOut } from "../../Login/Login/LoginManager";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsNavbarSticky(true);
      } else {
        setIsNavbarSticky(false);
      }
    });
  }, []);

  const navStyle = `${
    isNavbarSticky || isNavbarCollapsed ? "nav-style-sticky" : "nav-style"
  }`;

  const handleSingOut = () => {
    signOut();
    setLoggedInUser("");
  };
  return (
    <Navbar
      fixed="top"
      className={
        isNavbarSticky || isNavbarCollapsed
          ? "shadow-sm px-4 py-2 bg-white text-white"
          : "px-4 py-3"
      }
      expand="lg"
      variant="light"
    >
      <Navbar.Brand
        onClick={() => window.scrollTo(500, 0)}
        className={navStyle}
        as={Link}
        to="/"
      >
        ROAD RIDERS
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setIsNavbarCollapsed(!isNavbarCollapsed ? "show" : null)}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse className={isNavbarCollapsed} id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            onClick={() => window.scrollTo(500, 0)}
            className={navStyle}
            as={Link}
            to="/"
          >
            Home
          </Nav.Link>
          <Nav.Link className={navStyle} href="#service">
            Service
          </Nav.Link>
          <Nav.Link className={navStyle} href="#blog">
            Blog
          </Nav.Link>
          <Nav.Link className={navStyle} href="#about">
            About
          </Nav.Link>
          <Nav.Link className={navStyle} href="#testimonial">
            Reviews
          </Nav.Link>
          <Nav.Link className={navStyle} as={Link} to="/admin">
            Dashboard
          </Nav.Link>
          <Nav.Link className={navStyle} href="#contact">
            Contact Us
          </Nav.Link>
          {loggedInUser.email ? (
            <Nav.Link
              onClick={handleSingOut}
              className={navStyle}
              as={Link}
              to="/"
            >
              Sign Out
            </Nav.Link>
          ) : (
            <Nav.Link className={navStyle} as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
