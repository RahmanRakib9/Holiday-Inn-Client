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
                         <Navbar.Brand href="/" style={{ fontSize: 'x-large', color: "black", fontFamily: 'fantasy' }}>Holiday Inn</Navbar.Brand>
                         <Navbar.Toggle />
                         <Navbar.Collapse className="justify-content-end">
                              <Link to='/' className='link-style'>About</Link>
                              <Link to='/' className='link-style'>Rooms</Link>
                              <Link to="/" className='link-style'>Services</Link>

                              <Link to='/login'>{user.email ?
                                   <button className='authentication-btn' onClick={signOutGoogle}>Log out</button> :
                                   <button className='authentication-btn' onClick={signInWithGoogle}>Login</button>
                              }</Link>

                              <Link to="/register"><button className='authentication-btn'>Sign up</button></Link>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </>
     );
};

export default Header;