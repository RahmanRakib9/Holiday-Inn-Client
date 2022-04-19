import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faDiscord, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// className='d-flex justify-content-center align-items-center'

const Footer = () => {
     return (
          <section style={{ marginTop: '80px' }} id='contact' >
               {/* <hr /> */}
               <Container>
                    <footer >
                         <Row className='d-flex justify-content-center'>
                              <Col>
                                   <ul className='text-center'>
                                        <h1 >Holiday Inn</h1>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#aboutHotel">About</a></li>
                                        <li><a href="#rooms">Rooms</a></li>
                                        <li><a href="">Services</a></li>

                                   </ul>
                              </Col>
                              <Col>
                                   <ul className='text-center '>
                                        <h2>Visit</h2>
                                        <li className='social-links'><a href="https://github.com/RahmanRakib99" target='_blank'>Github</a></li>
                                        <li className='social-links'><a href="https://www.instagram.com/rahman_rakib9/" target='_blank'>Instagram</a></li>
                                        <li className='social-links'><a href="https://www.linkedin.com/in/rahman-rakib-586826203/" target='_blank'>Linkedin</a></li>
                                        <li className='social-links'><a href="https://twitter.com/RahmanRakib10" target='_blank'>Discord</a></li>
                                        <li className='social-links'><a href="https://www.facebook.com/ra.kib.9655806" target='_blank'>Facebook</a></li>
                                        <li className='social-links'><a href="https://twitter.com/RahmanRakib10" target='_blank'>Twitter</a></li>
                                   </ul>
                              </Col>
                              <Col>
                                   <ul className='text-center'>
                                        <h2> Contact Us</h2>
                                        <li><p><FontAwesomeIcon icon={faLocationDot} /> Cumilla</p></li>
                                        <li><FontAwesomeIcon icon={faEnvelope} /> <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>rahmanrakibur6589@gmail.com</a></li>
                                        <div className='d-flex justify-content-around'>
                                             <a href="https://github.com/RahmanRakib99" target='_blank'><FontAwesomeIcon icon={faGithub} className='media-icons' /></a>
                                             <a href="https://twitter.com/RahmanRakib10" target='_blank'> <FontAwesomeIcon icon={faDiscord} className='media-icons' /></a>
                                             <a href="https://www.linkedin.com/in/rahman-rakib-586826203/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='media-icons' /></a>
                                             <a href="https://www.facebook.com/ra.kib.9655806" target='_blank'><FontAwesomeIcon icon={faFacebookF} className='media-icons' /></a>
                                             <a href="https://www.instagram.com/rahman_rakib9/" target='_blank'><FontAwesomeIcon icon={faInstagram} className='media-icons' /></a>
                                        </div>
                                   </ul>
                              </Col>
                         </Row>
                    </footer>
               </Container>
               {/* <hr /> */}
          </section>
     );
};

export default Footer;



