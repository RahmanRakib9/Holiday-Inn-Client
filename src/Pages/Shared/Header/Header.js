import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
     return (
          <>
               <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                    <Container>
                         <Navbar.Brand href="#home">Genius Hotel</Navbar.Brand>
                         <Navbar.Toggle />
                         <Navbar.Collapse className="justify-content-end">
                              <Nav.Link to="">Home</Nav.Link>
                              <Nav.Link to="">Services</Nav.Link>
                              <Nav.Link to="">Experts</Nav.Link>

                              <Navbar.Text>
                                   Signed in as: <a href="#login"></a>
                              </Navbar.Text>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </>
     );
};

export default Header;