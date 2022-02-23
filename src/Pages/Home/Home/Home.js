import React from 'react';
import AboutHotel from '../../AboutHotel/AboutHotel';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Rooms from '../Rooms/Rooms';
import Services from '../Services/Services';
import YtPromotion from '../YtPromotion/YtPromotion';

const Home = () => {
     return (
          <div id='home'>
               <Banner />
               <AboutHotel />
               <Rooms />
               <YtPromotion />
               {/* <Services/> */}
               <Footer />
          </div>
     );
};

export default Home;