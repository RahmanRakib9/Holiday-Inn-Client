import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51KsAM7CdN0OHKTOGy51MfE7a5vIcvljp30ZZdVE4rDGrgkQ2abTHVfU0MBKp0TgVuxt3OEEXLiTsNHoIHi6yhqlv00jYA53iiF')

const CheckOutForm = ({ checkOut }) => {

     const { roomTitle, price, _id } = checkOut;
     const { register, formState: { errors }, reset } = useForm();
     const { user } = useAuth();
     // console.log(_id);

     const initialInfo = { checkIn: '', checkOut: '', userName: user.displayName, email: user.email, phone: '', country: 'Bangladesh', address: '', zip: null, city: '' }
     const [userInfo, setUserInfo] = useState(initialInfo);
     let navigate = useNavigate();


     //get input value and them into state
     const handleBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const updatedInfo = { ...userInfo };
          updatedInfo[field] = value;
          setUserInfo(updatedInfo);
     }


     const handleOnSubmit = e => {
          //collect data
          e.preventDefault();
          const bookingData = {
               ...userInfo,
               roomName: roomTitle,
               roomPrice: price
          }
          //send data to server
          fetch('http://localhost:5000/users', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(bookingData)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         e.target.reset();
                         navigate(`/book/${_id}/checkout/billing`)
                    }
               })


          // alert('submitting')

     }


     return (
          <div>
               <div className='d-flex justify-content-center'>
                    <form onSubmit={handleOnSubmit}>

                         <section>
                              <h1>Make A Reservation</h1>
                              <label htmlFor="checkIn">Check In</label>
                              <input type="date" name='checkIn' required id='checkIn' className='form-control' onBlur={handleBlur} />

                              <label htmlFor="checkOut">Check Out</label>
                              <input type="date" name='checkOut' required id='checkOut' className='form-control' onBlur={handleBlur} />
                         </section>

                         <section className='mt-5'>
                              <h1>Enter Personal Information</h1>
                              <p>Name</p>
                              <input type='text' name='userName' defaultValue={user.displayName} required className='form-control' onBlur={handleBlur} />

                              <p>Email</p>
                              <input type='email' name='email' defaultValue={user.email} required className='form-control' onBlur={handleBlur} />

                              <p>Phone Number</p>
                              <input type='number' name='phone' required className='form-control' onBlur={handleBlur} />

                              <p>Country</p>
                              <input type='text' name='country' defaultValue="Bangladesh" required className='form-control' disabled onBlur={handleBlur} />

                              <p>Current Address</p>
                              <input type='text' name='address' required className='form-control' onBlur={handleBlur} />

                              <p>Zip/Postal code</p>
                              <input type='number' name='zip' required className='form-control' onBlur={handleBlur} />

                              <p>City</p>
                              <input type='text' name='city' required className='form-control' onBlur={handleBlur} /><br />
                         </section>

                         <input type="submit" value='Proceed to Pay' />
                    </form>
               </div>
          </div>
     );
};

export default CheckOutForm;