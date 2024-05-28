import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

function Navigasibar() {
  return (
    <Navbar fixed="top" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="text-white">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-white">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasibar;
