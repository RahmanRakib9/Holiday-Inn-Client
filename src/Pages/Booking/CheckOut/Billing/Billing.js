import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import BillingForm from './BillingForm';
import { Col, Container, Row } from 'react-bootstrap';

const stripePromise = loadStripe('pk_test_51KsAM7CdN0OHKTOGy51MfE7a5vIcvljp30ZZdVE4rDGrgkQ2abTHVfU0MBKp0TgVuxt3OEEXLiTsNHoIHi6yhqlv00jYA53iiF')

const Billing = () => {
     const { id } = useParams();
     const [billing, setBilling] = useState({});

     useEffect(() => {
          fetch(`http://localhost:5000/rooms/${id}/checkout/billing`)
               .then(res => res.json())
               .then(data => {
                    setBilling(data)
                    console.log('billing data', data);
               })
     }, []);



     return (
          <Container>
               <section style={{ marginTop: '10%', }} >
                    <Row >
                         <Col xs={12} md={8}>
                              <Elements stripe={stripePromise}>
                                   <BillingForm billing={billing}></BillingForm>
                              </Elements>
                         </Col>
                         <Col xs={12} md={4} style={{alignItems:'center'}}>
                              <h5>Booking Summery</h5>
                              <p>Pay for {billing.roomTitle}</p>
                              <p>Bed Capacity: {billing.bedCapacity} person</p>
                              <p>Total Amount: BDT {billing.price} Taka</p>
                         </Col>
                    </Row>
               </section>
          </Container>
     );
};

export default Billing;