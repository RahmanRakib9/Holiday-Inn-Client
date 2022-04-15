import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/s1.jpg'
import slider2 from '../../../images/s2.jpg'
import slider3 from '../../../images/s3.jpg'
import './Banner.css'
import 'animate.css'



const Banner = () => {
     const [index, setIndex] = useState(0);

     const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
     };
     return (
          <section className='carousel' id='banner'>
               <Carousel fade>
                    <Carousel.Item >
                         <img
                              className="d-block w-100 banner-image"
                              src={slider1}
                              alt="First slide"
                         />
                         <Carousel.Caption>
                              <h5 className="animate__animated animate__backInLeft" > HOLIDAY INN</h5>
                              <h6 className="animate__animated animate__backInRight">Welcome to HOLIDAY INN where business and leisure blend together</h6>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <img

                              className="d-block w-100 banner-image"
                              src={slider2}
                              alt="Second slide"
                         />
                         <Carousel.Caption>
                              <h5 className="animate__animated animate__backInLeft" >HOLIDAY INN</h5>
                              <h6 className="animate__animated animate__backInRight">is one of the best standard luxury hotel in Bangladesh</h6>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100"
                              src={slider3}
                              alt="Third slide"
                         />

                         <Carousel.Caption>
                              <h5 className="animate__animated animate__backInLeft" >HOLIDAY INN</h5>
                              <h6 className="animate__animated animate__backInRight">A HEAVENLY PLACE</h6>
                         </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          </section>
     );
};

export default Banner;