import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Booking.css'
import Complimentary from './Complimentary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'

const Booking = () => {
     const { id } = useParams();
     const [booking, setBooking] = useState({});

     useEffect(() => {
          fetch(`http://localhost:5000/rooms/${id}`)
               .then(res => res.json())
               .then(data => {
                    setBooking(data)
                    console.log(data);
               })
     }, [])

     return (
          <section >
               <header className='booking-header mt-2'>
                    <div className='container alignment'>

                         <div>
                              <h1 >{booking.roomTitle}</h1>
                              <Link to='/'>Home</Link> / <span>Room-Details</span>
                         </div>

                    </div>
               </header>
               <Container className='d-flex justify-content-center'>
                    <Row className='w-100'>
                         <Col xs={12} md={7} >
                              <img style={{ width: "100%", marginTop: "70px" }} src={`data:image/jpeg;base64,${booking.photo}`} alt="" />
                              <div className='room-element-container'>
                                   <span className='room-element'>Price in BDT: {booking.price}৳</span>
                                   <span className='room-element'><FontAwesomeIcon icon={faBed} /> Bed-Type: {booking.bedType}</span>
                                   <span className='room-element'><FontAwesomeIcon icon={faPerson} /> Bed-Capacity: {booking.bedCapacity}</span>
                              </div>
                              <div style={{fontSize:'medium', fontFamily: "font-family:Arial, Helvetica, sans-serif" }}>
                                   <p>{booking.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio tenetur, non consequuntur provident sapiente et ullam natus quos perferendis. </p>
                              </div>
                         </Col>
                         <Col xs={12} md={5} className='d-flex justify-content-center align-items-center'>
                              <Complimentary />
                         </Col>
                    </Row>

               </Container>
          </section>
     );
};

export default Booking;

