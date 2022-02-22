import React from 'react';
import './Service.css'

const Service = ({ x }) => {
     const { name, id, description, imgUrl } = x;
     return (
          <section className='justify-content-center align-items-center'>
               <div className='service'>
                    <img src={imgUrl} alt="" />
               </div>
          </section>
     );
};

export default Service;