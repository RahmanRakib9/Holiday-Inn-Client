import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import '../Register/Register.css'

const Login = () => {
     const { user, signInWithGoogle, signOutGoogle } = useAuth();

     return (
          <section style={{ marginTop: "6%" }}>
               <Container>
                    <Form>
                         <Form.Group className="mb-3" >
                              <Form.Label>Your Email</Form.Label>
                              <Form.Control type="email" placeholder="Enter Your Email" />
                         </Form.Group>
                         <Form.Group className="mb-3" >
                              <Form.Label>Your Password</Form.Label>
                              <Form.Control type="password" placeholder="Enter Your Password" />
                         </Form.Group>
                         <Button className='authentication-btn' type='submit'>Login</Button><br />
                         <HashLink to='/register' className='link-style register-login-navigate'>New User?Please Register</HashLink>
                    </Form>
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




