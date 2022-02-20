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
                         <Card.Text className='card-element'>
                              {title}
                         </Card.Text>
                    </Card.Body>
               </Card>
          </div>
     );
};

export default Room;





{/* <Card.Title>Card Title</Card.Title>

<Button variant="primary">Go somewhere</Button> */}