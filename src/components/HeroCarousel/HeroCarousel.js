import React from 'react';
import CarouselItem from './CarouselItem';
import { Link, useLoaderData } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroCarousel = () => {
    const locatoins = useLoaderData();
    return (
      <Carousel>
        {locatoins.map((location) => (
          <Carousel.Item key={location.id} style={{ height: "90vh" }}>
            <img
              className="d-block w-100"
              src={location.img}
              alt="First slide"
              style={{ filter: "brightness(30%)" }}
            />
            <Carousel.Caption className="mb-5">
              <h3>{location.name}</h3>
              <p>{location.body}</p>
              <Link to={`/location/${location.id}`}>
                <button className="btn btn-info px-4">
                  Book{" "}
                  <FontAwesomeIcon
                    className="ms-2"
                    icon={faArrowRight}
                  ></FontAwesomeIcon>
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
};

export default HeroCarousel;