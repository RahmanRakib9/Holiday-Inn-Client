import React from 'react';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
import './YtPromotion.css'



const YtPromotion = () => {
     return (
          <section className='mt-5'>
               <iframe width="100%" height="500" src="https://www.youtube.com/embed/aw4YArUq19I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowFullScreen ></iframe>
          </section>
     );
};

export default YtPromotion;

