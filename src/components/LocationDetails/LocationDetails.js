import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Form from "react-bootstrap/Form";

const LocationDetails = () => {
    const location = useLoaderData()
    console.log(location)
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${location.img})`,
        }}
      >
        <div className="d-flex h-100 align-items-center mx-5 px-5">
          <div className="w-50">
            <h2 className="display-3 fw-semibold">{location.name}</h2>
            <p className="me-5">{location.body}</p>
          </div>
          <div className="w-50">
            <Form className="bg-white mx-5 py-3 px-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Origin</Form.Label>
                <Form.Control type="text" defaultValue={"Dhaka"} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={location.name}
                  readOnly
                />
              </Form.Group>

              <div className="d-flex">
                <Form.Group
                  className="mb-3 w-50 me-3"
                  controlId="formBasicPassword"
                >
                  <Form.Label htmlFor="start">From</Form.Label>
                  <Form.Control
                    type="date"
                    value="2022-10-23"
                    min="2022-10-23"
                    max="2022-12-30"
                    id="start"
                  ></Form.Control>
                </Form.Group>
                <Form.Group
                  className="mb-3 w-50 ms-3"
                  controlId="formBasicPassword"
                >
                  <Form.Label htmlFor='end'>To</Form.Label>
                  <Form.Control
                    type="date"
                    value="2022-10-23"
                    min="2022-10-23"
                    max="2022-12-30"
                    id="end" />
                </Form.Group>
              </div>
              <button type="button" class="btn btn-info w-100 m">
                Start Booking
              </button>
            </Form>
          </div>
        </div>
      </div>
    );
};

export default LocationDetails;