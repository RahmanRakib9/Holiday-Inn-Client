import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
     const { id } = useParams();
     const [booking, setBooking] = useState({});

     useEffect(() => {
          fetch(`http://localhost:5000/rooms/${id}`)
               .then(res => res.json())
               .then(data => {
                    console.log(data);
               })
     }, [])

     return (
          <div>
               <h1>this is {id}</h1>
               
          </div>
     );
};

export default Booking;