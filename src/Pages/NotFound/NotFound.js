import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
     return (
          <section style={{ textAlign: 'center', marginTop: "10%" }}>
               <Container>
                    <h1 style={{ color: 'red' }}>Sorry Route Not Found!!</h1>
                    <Link to='/'>Back</Link>
               </Container>
          </section>
     );
};

export default NotFound;