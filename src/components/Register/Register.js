import { FaGoogle, FaFacebook } from "react-icons/fa";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";


const Register = () => {
  const { createUser, singinWithGoogle } = useContext(AuthContext);

  const submitHandle = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password =form.password.value;
    console.log(name, email, password)
    createUser(email, password)
    .then(result => {
      console.log(result.user)
      form.reset()
    })
    .catch(e => console.log(e))
  }

  // google sign in
  const googleSignInHandle = () => {
    singinWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="login-form">
        <Form onSubmit={submitHandle}>
          <h2 className="text-center text-info fw-semibold mb-4">Register</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Button variant="info" className="w-100 mb-3 mt-2" type="submit">
            Register
          </Button>
        </Form>
        <p className="text-center">
          Have an account? <Link to="/login">Please Login</Link>
        </p>
        <p className="text-center fw-semibold">Or</p>
        <button onClick={googleSignInHandle} className="login-google">
          <FaGoogle className="google-icon"></FaGoogle>{" "}
          <span className="text-white text-center ms-2">
            Continue with Google
          </span>
        </button>
        <button className="login-google mt-3">
          <FaFacebook className="google-icon"></FaFacebook>{" "}
          <span className="text-white text-center ms-2">
            Continue with Facebook
          </span>
        </button>
      </div>
    </div>
  );
};

export default Register;
