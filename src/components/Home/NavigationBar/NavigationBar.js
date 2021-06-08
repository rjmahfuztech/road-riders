import React, {useContext} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {UserContext} from "../../../App";
import {signOut} from "../../Login/Login/LoginManager";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSingOut = () => {
    signOut();
    setLoggedInUser("");
  };
  return (
    <Navbar collapseOnSelect variant="dark" expand="md">
      <Navbar.Brand as={Link} to="/">
        ROAD RIDERS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav>
          <Nav.Link className="nav-style" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="nav-style" href="#blog">
            Blog
          </Nav.Link>
          <Nav.Link className="nav-style" href="#service">
            Service
          </Nav.Link>
          <Nav.Link className="nav-style" as={Link} to="/admin">
            Admin
          </Nav.Link>
          <Nav.Link className="nav-style" href="#contact">
            Contact Us
          </Nav.Link>
          {loggedInUser.email ? (
            <Nav.Link
              onClick={handleSingOut}
              className="nav-style nav-end"
              as={Link}
              to="/"
            >
              Sign Out
            </Nav.Link>
          ) : (
            <Nav.Link className="nav-style nav-end" as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
