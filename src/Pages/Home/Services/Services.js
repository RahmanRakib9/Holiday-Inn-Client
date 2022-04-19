import React from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

     const services = [
          {
               id: 1,
               name: "Holiday Inn Restaurant ",
               description: 'Enjoy nature in an open environment with huge rooftops with Hotel Inn',
               imgUrl: 'https://i.ibb.co/PCHhpqh/zante-in-pictures-720x520.jpg'
          },
          {
               id: 2,
               name: "Nature is Luxurious",
               description: 'Enjoy natural luxury with Hotel Inn',
               imgUrl: 'https://i.ibb.co/xXpj57N/1-1-480x480.jpg'
          },
          {
               id: 3,
               name: "Room Service",
               description: 'Room service is available 24/7. Parking is complimentary',
               imgUrl: 'https://i.ibb.co/YBTqxDL/1.jpg'
          },
          {
               id: 4,
               name: "Conference Room",
               description: "Conference rooms are for conference calls, board meetings, management discussions, and other major decision-making situations",
               imgUrl: 'https://i.ibb.co/7k7BKkq/conference.jpg'
          }
     ]

     return (
          <section className='services-section'>
               <Container>
                    <header style={{ textAlign: 'center', fontFamily: "Arial, Helvetica, sans-serif", marginTop: "80px" }}>
                         <h1 style={{}}>HOTEL SERVICE</h1>
                         <h6>OUR AWESOME SERVICES</h6>
                    </header>
                    <div className='services-container' id='services'>
                         {
                              services.map(x => <Service x={x} key={x.id}></Service>)
                         }
                    </div>
               </Container>
               <hr />
          </section>
     );
};

export default Services;

//d-flex justify-content-center align-items-center