// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import BillingForm from './BillingForm';

// const stripePromise = loadStripe('pk_test_51KsAM7CdN0OHKTOGy51MfE7a5vIcvljp30ZZdVE4rDGrgkQ2abTHVfU0MBKp0TgVuxt3OEEXLiTsNHoIHi6yhqlv00jYA53iiF')

// const Billing = () => {
//      const { id } = useParams();
//      const [billingFor, setBillingFor] = useState({});
//      const { price } = billingFor;

//      useEffect(() => {
//           fetch(`http://localhost:5000/shipment/${id}`)
//                .then(res => res.json())
//                .then(data => {
//                     setBillingFor(data)
//                     console.log('billingData', data);
//                })
//      }, [id])

//      return (
//           <div>
//                <h1>taka de {id} er jnnw</h1>
//                <h2>amount: {price} taka</h2>
//                {billingFor?.price && <Elements stripe={stripePromise}>
//                     <BillingForm billingFor={billingFor}  ></BillingForm>
//                </Elements>}
//           </div>
//      );
// };

// export default Billing;