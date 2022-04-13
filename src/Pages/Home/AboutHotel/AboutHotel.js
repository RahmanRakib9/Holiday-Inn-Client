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
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, eveniet sit numquam impedit earum doloribus cum autem quis explicabo dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis.</p>

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