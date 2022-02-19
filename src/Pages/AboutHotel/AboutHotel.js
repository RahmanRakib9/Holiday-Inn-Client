import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImage from '../../images/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433 (1).jpg'

const AboutHotel = () => {
     return (
          <section style={{ width: '100%' }}>
               <Container style={{ marginTop: "100px" }} >
                    <Row>
                         <Col>
                              <h1>HOTEL ZANTE SINCE 1992</h1>
                              <h4>High quality accommodation services</h4>
                              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

                                   Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                         </Col>
                         <Col>
                              <img src={aboutImage} alt="" />
                         </Col>
                    </Row>
               </Container>
          </section>
     );
};

export default AboutHotel;