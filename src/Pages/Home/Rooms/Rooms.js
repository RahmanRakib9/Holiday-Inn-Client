import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Room from '../Room/Room';
import './Rooms.css';

const Rooms = () => {
     const [roomType, setRoomType] = useState([]);

     useEffect(() => {
          fetch('http://localhost:5000/rooms')
               .then(res => res.json())
               .then(data => {
                    setRoomType(data)
                    // console.log(data);
               })
     }, [])

     return (
          <Container >
               <div style={{ marginTop: '80px' }} >
                    <header style={{ textAlign: 'center' }}>
                         <h1>OUR FAVORITE ROOMS</h1>
                         <h5>Check out now our best rooms</h5>
                    </header>
                    <div className='card-container' id='rooms'>
                         {
                              roomType.map(room => <Room room={room} key={room._id}></Room>)
                         }
                    </div>
               </div>
          </Container>
     );
};

export default Rooms;