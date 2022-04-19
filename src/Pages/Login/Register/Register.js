import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Footer from '../../Shared/Footer/Footer';
import '../../Shared/Header/Header.css'
import './Register.css'
import useAuth from '../../../hooks/useAuth'

const Register = () => {
     const [loginData, setLoginData] = useState({})
     const { user, registerUser, isLoading, authError } = useAuth();

     const handleBlur = (e) => {
          const field = e.target.name;
          const value = e.target.value;
          const updatedLogindata = { ...loginData };
          updatedLogindata[field] = value;
          setLoginData(updatedLogindata);
     }

     const handleRegisterUser = (e) => {

          registerUser(loginData.name, loginData.email, loginData.password);
          e.preventDefault();
     }

     return (
          <section style={{ marginTop: "5%" }}>
               <Container>
                    <Form onSubmit={handleRegisterUser}>
                         <Form.Group className="mb-3" >
                              <Form.Label>Your Name</Form.Label>
                              <Form.Control type="text" placeholder="Enter Your Name" name='name' onBlur={handleBlur} required />
                         </Form.Group>
                         <Form.Group className="mb-3" >
                              <Form.Label>Your Email</Form.Label>
                              <Form.Control type="email" placeholder="Enter Your Email" name='email' onBlur={handleBlur} required />
                         </Form.Group>
                         <Form.Group className="mb-3" >
                              <Form.Label>Your Password</Form.Label>
                              <Form.Control type="password" placeholder="Enter Your Password" name='password' onBlur={handleBlur} required />
                         </Form.Group>
                         <Form.Group className="mb-3" >
                              <Form.Label>Retype Your Password</Form.Label>
                              <Form.Control type="password" placeholder="Confirm Your Password" name='password2' onBlur={handleBlur} required />
                         </Form.Group>
                         <Button className='authentication-btn' type='submit'>Register</Button><br />
                         <HashLink to='/login' className='link-style register-login-navigate'>Already Registered?Please Login</HashLink>
                    </Form>
                    {isLoading && <Spinner animation="border" className='spinner-style' />}

                    {user.email && <Alert variant='success'>Account Created Successfully</Alert>}
                    {authError && <Alert variant='danger'>{authError}</Alert>}

               </Container>
               <div style={{ marginTop: '5%' }}>
                    <hr />
                    <Footer />
               </div>
          </section>
     );
};

export default Register;