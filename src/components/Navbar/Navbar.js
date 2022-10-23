import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navber = () => {
  const {user, logOut} = useContext(AuthContext);
  //log out Handle 
  const logOutHandle = () => {
    logOut()
    .then(() => {})
    .catch((e) => console.log(e))
  }
    return (
      <Navbar collapseOnSelect expand="lg" bg="info" variant="info">
        <Container>
          <Navbar.Brand className="fw-semibold">TOUR BD</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link
                className="text-decoration-none text-dark fw-semibold me-3"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-decoration-none text-dark fw-semibold me-3"
                to="/hotels"
              >
                Hotels
              </Link>
            </Nav>
            <Nav>
              {user?.uid ? (
                <>
                  <button onClick={logOutHandle} className="btn btn-danger">
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    className="text-decoration-none text-dark fw-semibold me-3"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="text-decoration-none text-dark fw-semibold me-3"
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
              {user?.photoURL ? (
                <img
                  className="w-25 rounded-circle ms-3"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <FaUserCircle className="fs-3"></FaUserCircle>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navber;