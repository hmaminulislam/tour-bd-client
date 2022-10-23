import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="info" variant="info">
        <Container>
          <Navbar.Brand className='fw-semibold'>TOUR BD</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className='text-decoration-none text-dark fw-semibold me-3' to="/">Home</Link>
              <Link className='text-decoration-none text-dark fw-semibold me-3' to="/hotels">Hotels</Link>
            </Nav>
            <Nav>
              <Link className='text-decoration-none text-dark fw-semibold me-3' to="/login">Login</Link>
              <Link className='text-decoration-none text-dark fw-semibold me-3' to="/register">Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navber;