import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import CheckOutForm from '../CheckOutForm/CheckOutForm';

const CheckOut = () => {
     const [checkOut, setCheckOut] = useState({});
     const { id } = useParams();

     useEffect(() => {
          fetch(`http://localhost:5000/rooms/${id}/checkout`)
               .then(res => res.json())
               .then(data => {
                    setCheckOut(data)
                    console.log(data);
               })
     }, [id])

     return (
          <Container>
               <Row className='w-100 mt-5' >
                    <Col xs={12} md={7}>
                         <CheckOutForm checkOut={checkOut}></CheckOutForm>
                    </Col>
                    <Col xs={12} md={5} className='d-flex justify-content-center align-items-center'>
                         <div >
                              <img style={{ width: '100%' }} src={`data:image/jpeg;base64,${checkOut.photo}`} alt="" />
                              <div className='d-flex justify-content-around'>
                                   <h6>{checkOut.roomTitle}</h6>
                                   <h6>BDT TAKA {checkOut.price}</h6>
                              </div>
                         </div>
                    </Col>
               </Row>
          </Container>
     );
};

export default CheckOut;