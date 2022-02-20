import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import './Room.css'

const Room = ({ room }) => {
     const { title, description, imgUrl, bed, capacity, bedType, price, id } = room;
     return (
          <div className='room'>
               <Card style={{ width: '28rem' }} style={{ border: 'none' }}>
                    <Card.Body>
                         <Card.Img variant="top" src={imgUrl} />
                         <Card.Text style={{ border: '2px solid' }}>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                         </Card.Text>
                    </Card.Body>
               </Card>
          </div>
     );
};

export default Room;



{/* <Card.Title>Card Title</Card.Title>

<Button variant="primary">Go somewhere</Button> */}