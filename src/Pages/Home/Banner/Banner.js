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
          <section className='carousel'>
               <Carousel fade>
                    <Carousel.Item >
                         <img
                              className="d-block w-100 banner-image"
                              src={slider1}
                              alt="First slide"
                         />
                         <Carousel.Caption>
                              <h1 className="animate__animated animate__backInLeft">First slide label</h1>
                              <h3 className="animate__animated animate__backInRight">Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100 banner-image"
                              src={slider2}
                              alt="Second slide"
                         />

                         <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100"
                              src={slider3}
                              alt="Third slide"
                         />

                         <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                         </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          </section>
     );
};

export default Banner;