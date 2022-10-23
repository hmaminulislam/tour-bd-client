import { FaGoogle, FaFacebook } from "react-icons/fa";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="login-form">
        <Form>
          <h2 className="text-center text-info fw-semibold mb-4">Login</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="info" className="w-100 mb-3 mt-2" type="submit">
            Login
          </Button>
        </Form>
        <p className="text-center">Dont't have an account? <Link to='/register'>Create account</Link></p>
        <p className="text-center fw-semibold">Or</p>
        <button className="login-google">
          <FaGoogle className="google-icon"></FaGoogle>{" "}
          <span className="text-white text-center ms-2">
            Continue with Google
          </span>
        </button>
        <button className="login-google mt-3">
          <FaFacebook className="google-icon"></FaFacebook>{" "}
          <span className="text-white text-center ms-2">
            Continue with Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;