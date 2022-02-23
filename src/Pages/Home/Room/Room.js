import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Room.css'

const Room = ({ room }) => {
     const { title, description, imgUrl, bed, capacity, bedType, price, id } = room;

     const navigate = useNavigate();
     const handleBooking = (ID) => {
          navigate(`/book/${ID}/`)
     }

     return (
          <div className='room'>
               <Card style={{ width: '28rem' }} style={{ border: 'none' }}>
                    <Card.Body >
                         <Card.Img variant="top" src={imgUrl} />
                         <Card.Text className='card-element'>
                              <button className='book-btn' onClick={() => handleBooking(id)}>Book {title}</button>
                         </Card.Text>

                    </Card.Body>
               </Card>
          </div>
     );
};

export default Room;





