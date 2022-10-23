import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelItem from '../HotelItem/HotelItem';

const Hotels = () => {
    const hotels = useLoaderData()
    return (
      <div className='d-flex px-5 mx-5'>
        <div className='w-50 me-4'>
          {hotels.map((hotel) => (
            <HotelItem hotel={hotel} key={hotel.id}></HotelItem>
          ))}
        </div>
        <div className='w-50 mt-5 ms-4'>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe width="550" height="900" id="gmap_canvas" src="https://maps.google.com/maps?q=dhaka,%20bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no" >
                </iframe>
              </div>
            </div>
        </div>
      </div>
    );
};

export default Hotels;