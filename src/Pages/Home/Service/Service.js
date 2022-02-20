import React from 'react';
import './Service.css'

const Service = ({ x }) => {
     const { name, id, description, imgUrl } = x;
     return (
          <div className='service'>
               <img src={imgUrl} alt="" />
          </div>
     );
};

export default Service;