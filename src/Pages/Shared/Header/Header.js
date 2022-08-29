import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, signInWithGoogle, signOutGoogle } = useAuth();
  return (
    <>
      <Container>
        <Navbar
          variant="light"
          collapseOnSelect
          expand="lg"
          className="w-100 d-flex justify-content-center"
        >
          <Navbar.Brand
            href="/home#banner"
            style={{
              fontSize: "x-large",
              color: "black",
              fontFamily: "fantasy",
            }}
          >
            Holiday Inn
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <HashLink to="/home#about" className="link-style">
              About
            </HashLink>
            <HashLink to="/home#rooms" className="link-style">
              Rooms
            </HashLink>
            <HashLink to="/home#services" className="link-style">
              Services
            </HashLink>
            <HashLink to="/home#contact" className="link-style">
              Contact
            </HashLink>

            {user.email ? (
              <button className="authentication-btn" onClick={signOutGoogle}>
                Log Out
              </button>
            ) : (
              <Link to="/login">
                <button className="authentication-btn">Login</button>
              </Link>
            )}

            <Link to="/register">
              <button className="authentication-btn">Sign up</button>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
