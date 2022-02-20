import React from 'react';
import AboutHotel from '../../AboutHotel/AboutHotel';
import Banner from '../Banner/Banner';
import Rooms from '../Rooms/Rooms';

const Home = () => {
     return (
          <div>
               <Banner />
               <AboutHotel />
               <Rooms />
          </div>
     );
};

export default Home;