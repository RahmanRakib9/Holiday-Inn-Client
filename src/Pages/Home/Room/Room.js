import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Room.css'

const Room = ({ room }) => {
     const { roomTitle, description, photo, bed, bedCapacity, bedType, price, _id } = room;

     const navigate = useNavigate();
     const handleBooking = (ID) => {
          navigate(`/book/${ID}/`)
     }

     return (
          <div className='room'>
               <Card style={{ width: '28rem', border: 'none' }}>
                    <Card.Body >
                         <Card.Img variant="top" src={`data:image/jpeg;base64,${photo}`} />
                         <Card.Text className='card-element'>
                              <button className='book-btn' onClick={() => handleBooking(_id)}>Book {roomTitle}</button>
                         </Card.Text>

                    </Card.Body>
               </Card>
          </div>
     );
};

export default Room;





