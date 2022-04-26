import React from 'react';
import { useForm } from "react-hook-form";
import './ShipmentForm.css';

const ShipmentForm = () => {
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);


     return (
          <div className='d-flex justify-content-center'>
               <form onSubmit={handleSubmit(onSubmit)}>

                    <section>
                         <h1>Make A Reservation</h1>
                         <label htmlFor="checkIn">Check In</label>
                         <input type="date" id='checkIn' className='form-control' />

                         <label htmlFor="checkOut">Check Out</label>
                         <input type="date" id='checkOut' className='form-control' />
                    </section>

                    <section className='mt-5'>
                         <h1>Enter personal information</h1>

                         <p>Email</p>
                         <input type='email' {...register("email", { required: true })} className='form-control' />

                         <p>Phone Number</p>
                         <input type='number' {...register("phone", { required: true })} className='form-control' />

                         <p>Country</p>
                         <input defaultValue="Bangladesh" {...register("Bangladesh", { required: true })} className='form-control' disabled />

                         <p>Current Address</p>
                         <input type='text' {...register("address", { required: true })} className='form-control' />

                         <p>Zip/Postal code</p>
                         <input type='number' {...register("number", { required: true })} className='form-control' />

                         <p>City</p>
                         <input type='text' {...register("text", { required: true })} className='form-control' /><br />
                    </section>


                    <input type="submit" />
               </form>
          </div>
     );
};

export default ShipmentForm;