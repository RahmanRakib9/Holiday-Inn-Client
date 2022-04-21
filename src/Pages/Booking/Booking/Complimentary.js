import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import headerIcon from '../../../images/images.png'
import './Complimentary.css';

const Complimentary = () => {
     return (
          <section>
               <div >
                    <div className='d-flex justify-content-center mt-5 text-style'>
                         <img className='rounded' style={{ height: "80px" }} src={headerIcon} alt="" />
                    </div>
                    <div className='mt-3 text-style'>
                         <h3>COMPLIMENTARY</h3>
                         <h6><FontAwesomeIcon icon={faAngleRight} /> Breakfast for 4 pax</h6>
                         <h6><FontAwesomeIcon icon={faAngleRight} /> Welcome drink (on arrival)</h6>
                         <h6><FontAwesomeIcon icon={faAngleRight} /> Airport pick-up (on-demand)</h6>
                         <h6><FontAwesomeIcon icon={faAngleRight} /> Mineral water 500ml x 2 bottles</h6>
                         <h6><FontAwesomeIcon icon={faAngleRight} /> Internet in the rooms & lobby</h6>
                    </div>
               </div>
          </section>
     );
};

export default Complimentary;