import React from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

     const services = [
          {
               id: 1,
               name: "Holiday Inn Restaurent",
               description: 'Enjoy nature in an open environment with huge rooftops with Hotel Inn',
               imgUrl: 'https://i.ibb.co/B4FmZNK/zante-in-pictures-720x520.jpg'
          },
          {
               id: 2,
               name: "Nature is luxurious",
               description: 'Enjoy natural luxury with Hotel Inn',
               imgUrl: 'https://i.ibb.co/x3VCghp/blog-post5-400x600.jpg'
          },
          {
               id: 3,
               name: "Hotel Inn Weddings",
               description: "A wedding doesn't have to be expensive,To be memorable",
               imgUrl: 'https://i.ibb.co/Y0Jg897/blog-post4-400x600.jpg'
          }
     ]

     return (
          <section className='services-section'>
               <Container>

                    <div className='services-container '>
                         {
                              services.map(x => <Service x={x} key={x.id}></Service>)
                         }
                    </div>

               </Container>
          </section>
     );
};

export default Services;

//d-flex justify-content-center align-items-center