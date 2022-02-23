import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Booking = () => {
     const { RoomType } = useParams();
     return (
          <div>
               <h1>this is booking {RoomType}</h1>
               <Link to='/'>back</Link>
          </div>
     );
};

export default Booking;
