import React from "react";import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import basiclogo from "../images/connect-infinity-logo-warmred.png";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-lg-top">
      <Container>
        <Navbar.Brand href="#home"><img alt="logo" src={basiclogo} width={150}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="contacts">Contacts</Nav.Link>
            <Nav.Link href="/profile">My Profile</Nav.Link>
            <Nav.Link href="/search">Find Someone</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
          </Nav>
          <Nav class="navbar-right navbar-nav">
            <Nav.Link>Sign Up</Nav.Link>
            <Nav.Link>Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;