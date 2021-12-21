import React from "react";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top b-5">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "#7B61FF" }}>Tutor</Navbar.Brand>
        {/* try to figure how to connect Bootstrap and react router */}
        <Nav className="justify-content-end" style={{ maxHeight: '100px' }} navbarScroll>
          {/* <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/EditProfile">Edit Profile</Nav.Link> */}
          {/* replace the Nav.Link with Link router */}
          <Link to="/">Home</Link>
          <Link to="/profile">Edit Profile</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;