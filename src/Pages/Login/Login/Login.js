import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Spinner } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import '../Register/Register.css'

const Login = () => {
     const { user, signInWithGoogle, signOutGoogle, signIn, isLoading, authError } = useAuth();
     const [loginData, setLoginData] = useState({});

     const handleBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const updatedLoginData = { ...loginData };
          updatedLoginData[field] = value;
          setLoginData(updatedLoginData);
     }

     const handleLoginUser = e => {
          e.preventDefault();
          signIn(loginData.email, loginData.password);

     }


     return (
          <section style={{ marginTop: "6%" }}>
               <Container>
                    <Form onSubmit={handleLoginUser}>
                         <Form.Group className="mb-3" >
                              <Form.Label>Your Email</Form.Label>
                              <Form.Control type="email" placeholder="Enter Your Email" name='email' required onBlur={handleBlur} />
                         </Form.Group>
                         <Form.Group className="mb-3" >
                              <Form.Label>Your Password</Form.Label>
                              <Form.Control type="password" placeholder="Enter Your Password" name='password' required onBlur={handleBlur} />
                         </Form.Group>
                         <Button className='authentication-btn' type='submit'>Login</Button><br />
                         <HashLink to='/register' className='link-style register-login-navigate'>New User?Please Register</HashLink>
                    </Form>
                    {isLoading && <Spinner animation="border" className='spinner-style' />}

                    {user?.email && <Alert variant='success'>Login Successfully</Alert>}

                    {authError && <Alert variant='danger'>{authError}</Alert>}

               </Container>
               <div style={{ marginTop: '15%' }}>
                    <hr />
                    <Footer />
               </div>
          </section>
     );
};

export default Login;





{/* <Col className='d-flex justify-content-center align-items-center'>
{
     user.email ?
          <button onClick={signOutGoogle}>Sign Out</button> :
          <button onClick={signInWithGoogle}>Google Login</button>
}
</Col> */}




