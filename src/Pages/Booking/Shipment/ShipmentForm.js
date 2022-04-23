import React from 'react';
import { useForm } from "react-hook-form";


const ShipmentForm = () => {
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);


     return (
          <div>
               <form onSubmit={handleSubmit(onSubmit)}>

                    <h1>Enter personal information</h1>

                    <p>Email</p>
                    <input type='email' {...register("email", { required: true })} />

                    <p>Phone Number</p>
                    <input type='number' {...register("phone", { required: true })} />

                    <p>Country</p>
                    <input defaultValue="Bangladesh" {...register("Bangladesh", { required: true })} disabled />

                    <p>Current Address</p>
                    <input type='text' {...register("address", { required: true })} />

                    <p>Zip Code</p>
                    <input type='number' {...register("number", { required: true })} />

                    <p>City</p>
                    <input type='text' {...register("text", { required: true })} />


                    <input type="submit" />
               </form>
          </div>
     );
};

export default ShipmentForm;