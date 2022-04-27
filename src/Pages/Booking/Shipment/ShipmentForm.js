import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './ShipmentForm.css';
import useAuth from '../../../hooks/useAuth'

const ShipmentForm = ({ shipment }) => {
     const { roomTitle, price } = shipment;
     const { register, formState: { errors }, reset } = useForm();
     const { user } = useAuth();

     const initialInfo = { checkIn: '', checkOut: '', userName: user.displayName, email: user.email, phone: '', country: '', address: '', zip: null, city: '' }
     const [userInfo, setUserInfo] = useState(initialInfo)

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
                    e.target.reset();
               })


          e.preventDefault();
          // alert('submitting')

     }



     return (
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
                         <h1>Enter personal information</h1>
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
     );
};

export default ShipmentForm;