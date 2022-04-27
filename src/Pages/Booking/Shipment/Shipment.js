import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ShipmentForm from './ShipmentForm';
import './ShipmentForm.css';

const Shipment = () => {
     const { id } = useParams();
     const [shipment, setShipment] = useState({});



     useEffect(() => {
          fetch(`http://localhost:5000/shipment/${id}`)
               .then(res => res.json())
               .then(data => {
                    setShipment(data)
                    // console.log(data);
               })
     }, [])


     return (
          <Container>
               <Row className='w-100 mt-5' >
                    <Col xs={12} md={7}>
                         <ShipmentForm shipment={shipment}></ShipmentForm>
                    </Col>
                    <Col xs={12} md={5} className='d-flex justify-content-center align-items-center'>
                         <div >

                              <img style={{ width: '100%' }} src={`data:image/jpeg;base64,${shipment.photo}`} alt="" />
                              <div className='d-flex justify-content-around'>
                                   <h6>{shipment.roomTitle}</h6>
                                   <h6>BDT TAKA {shipment.price}</h6>
                              </div>
                         </div>
                    </Col>
               </Row>
          </Container>
     );
};

export default Shipment;