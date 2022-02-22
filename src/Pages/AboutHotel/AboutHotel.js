import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImage from '../../images/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433 (1).jpg'
import './AboutHotel.css'

const AboutHotel = () => {
     return (
          <section style={{ width: '100%' }} >
               <Container style={{ marginTop: "100px" }} >
                    <Row id='aboutHotel'>
                         <Col className='d-flex justify-content-center align-items-center w-100'>
                              <div>
                                   <h1>HOTEL ZANTE SINCE 1992</h1>
                                   <h4>High quality accommodation services</h4>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, eveniet sit numquam impedit earum doloribus cum autem quis explicabo dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis.</p>
                              </div>
                         </Col>
                         <Col>
                              <div className='imageContainer'>
                                   <img src={aboutImage} alt="" className='image' />
                              </div>
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