import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Room from '../Room/Room';
import './Rooms.css';

const Rooms = () => {
     const [roomType, setRoomType] = useState([]);

     useEffect(() => {
          fetch('http://localhost:5000/rooms')
               .then(res => res.json())
               .then(data => {
                    setRoomType(data)
                    console.log(data);
               })
     }, [])

     return (
          <Container >
               <Row >
                    <div className='card-container'>
                         {
                              roomType.map(room => <Room room={room}></Room>)
                         }
                    </div>
               </Row>
          </Container>

     );
};

export default Rooms;




{/*  <Container >
               <Row style={{ marginTop: '80px' }} id="rooms" className='w-100'>
                    <header style={{ textAlign: 'center' }}>
                         <h1>OUR FAVORITE ROOMS</h1>
                         <h5>Check out now our best rooms</h5>
                    </header>
                    <div className='card-container'>
                         {
                              roomType.map(room => <Room room={room} key={room._id}></Room>)
                         }
                    </div>
               </Row>
          </Container> */}