import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
     const { user, signInWithGoogle, signOutGoogle } = useAuth();
     return (
          <>
               <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                    <Container>
                         <Navbar.Brand href="/home#home">Holiday Inn</Navbar.Brand>
                         <Navbar.Toggle />
                         <Navbar.Collapse className="justify-content-end">
                              <Nav.Link href='/home#aboutHotel'>About</Nav.Link>
                              <Nav.Link href='/home#rooms'>Rooms</Nav.Link>
                              <Nav.Link to="">Services</Nav.Link>

                              <Nav.Link href='/login'>{user.email ?
                                   <button className='authentication-btn' onClick={signOutGoogle}>Log out</button> :
                                   <button className='authentication-btn' onClick={signInWithGoogle}>Login</button>
                              }</Nav.Link>

                              <Nav.Link to="/register"><button className='authentication-btn'>Sign up</button></Nav.Link>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </>
     );
};

export default Header;