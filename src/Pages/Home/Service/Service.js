import React from 'react';
import './Service.css'

const Service = ({ x }) => {
     const { name, id, description, imgUrl } = x;
     return (
          <section className='justify-content-center align-items-center'>
               <h4 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{name}</h4>
               <div className='service'>
                    <img src={imgUrl} alt="" className='rounded' />
                    <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{description}</p>
               </div>
          </section>
     );
};

export default Service;