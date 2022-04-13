import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import png from '../../../images/hotel-seo.png'
import './AboutHotel.css'


const AboutHotel = () => {
     return (
          <section style={{ width: '100%' }} >
               <Container style={{ marginTop: "100px" }} >
                    <Row id='aboutHotel' className='d-flex justify-content-center align-items-center w-100'>
                         <Col xs={12} md={6} className='text-center'>

                              <h1>HOLIDAY INN SINCE 1992</h1>
                              <h4>High quality accommodation services</h4>
                              <p>Bright, relaxed rooms feature cable TV and minifridges. Suites add separate living rooms and balconies. Most offer bay views, and 1 has a glass-roof living/dining area. Room service is available 24/7.

                                   Parking is complimentary. There are 6 restaurants and bars, including a rooftop Italian eatery, and a bar beside an outdoor pool. There's also a spa, a gym and direct access to a private beach. Breakfast is available.
                              </p>

                         </Col>
                         <Col className='imageContainer' xs={12} md={6}>

                              <img src={png} alt="" className='image' />

                         </Col>
                    </Row>
               </Container>
               <span >
                    <hr style={{ marginTop: '100px' }} />
               </span>
          </section>
     );
};

export default AboutHotel;