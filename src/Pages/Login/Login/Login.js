import React from 'react';
import { Col, Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
     const { user, signInWithGoogle, signOutGoogle } = useAuth();

     return (
          <section style={{ marginTop: '15%' }}>
               <Container>
                    <Col className='d-flex justify-content-center align-items-center'>
                         {
                              user.email ?
                                   <button onClick={signOutGoogle}>Sign Out</button> :
                                   <button onClick={signInWithGoogle}>Google Login</button>
                         }
                    </Col>
               </Container>
          </section>
     );
};

export default Login;




