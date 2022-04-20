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
                    // console.log(data);
               })
     }, [])

     return (
          <Container >
               <header className='section-header'>
                    <h1>OUR FAVORITE ROOMS</h1>
                    <h6>CHECK OUT NOW OUR BEST <span style={{ color: "#328ca8" }}>ROOMS</span></h6>
               </header>
               <Row >
                    <div className='card-container' id='rooms'>
                         {
                              roomType.map(room => <Room room={room} key={room._id}></Room>)
                         }
                    </div>
               </Row>
          </Container>

     );
};

export default Rooms;
