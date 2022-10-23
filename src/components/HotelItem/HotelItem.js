import React from 'react';
import { FaStar } from 'react-icons/fa';

const HotelItem = ({hotel}) => {
    return (
      <div className="card mb-3 mt-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={hotel.img} style={{height: '170px'}} className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{hotel.name}</h5>
              <p className="card-text">{hotel.body.slice(0, 120)} ...</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mx-3">
              <div className="d-flex align-items-center">
                <FaStar className="me-1 text-warning"></FaStar> {hotel.rating}{" "}
                Rating
              </div>
              <div className='fw-bold'>
                <>Price: ${hotel.price}</>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HotelItem;