import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../../Shared/Header/Header.css'

const BillingForm = ({ billing }) => {
     const stripe = useStripe();
     const elements = useElements();
     const [error, setError] = useState('');
     const [success, setSuccess] = useState(false);

     const navigate = useNavigate();

     const handleSubmit = async (event) => {

          event.preventDefault();

          if (!stripe || !elements) {
               return;
          }

          const card = elements.getElement(CardElement);

          if (card == null) {
               return;
          }

          const { error, paymentMethod } = await stripe.createPaymentMethod({
               type: 'card',
               card,
          });

          if (error) {
               setError(error);
               setSuccess(false);
          } else {
               setSuccess(true);
               setError('')
          }
     };

     return (
          <Container >
               <section>
                    <form onSubmit={handleSubmit}>
                         <CardElement
                              options={{
                                   style: {
                                        base: {
                                             fontSize: '16px',
                                             color: '#424770',
                                             '::placeholder': {
                                                  color: '#aab7c4',
                                             },
                                        },
                                        invalid: {
                                             color: '#9e2146',
                                        },
                                   },
                              }}
                         />
                         <Button type="submit" className='authentication-btn mt-5' disabled={!stripe && success}>{`Pay ${billing.price} Taka`}</Button>
                    </form>
                    {
                         error && <p style={{ textAlign: 'center', color: 'red' }}>{error.message}</p>
                    }
                    {
                         success && <p style={{ textAlign: 'center', color: 'green' }}>Payment Method Successful</p>
                    }
                   
               </section>
          </Container>
     );
};

export default BillingForm;