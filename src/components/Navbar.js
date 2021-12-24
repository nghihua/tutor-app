import React from "react";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <nav  expand="lg" className="fixed-top b-5">
      <Container fluid>
        <img src="https://i.ibb.co/7GSsT6Q/logo-removebg-preview.png" class="logo"/>
        <Navbar.Brand href="/" className="brand">Tutor</Navbar.Brand>
        {/* try to figure how to connect Bootstrap and react router */}
        <Nav className="justify-content-end" style={{ maxHeight: '100px' }} navbarScroll>
          {/* <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/EditProfile">Edit Profile</Nav.Link> */}
          {/* replace the Nav.Link with Link router */}
		  <div className="redirect">
          <Link to="/">Home</Link>
          <Link to="/profile">Edit Profile</Link>
		  </div>
        </Nav>
      </Container>
    </nav>
  );
};

export default Menu;