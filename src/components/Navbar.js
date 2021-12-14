import React from "react";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg" className="fixed-top b-5">
            <Container fluid>
                <Navbar.Brand href="/Home" style={{color:"#7B61FF"}}>Tutor</Navbar.Brand>
                <Nav className="justify-content-end" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/EditProfile">Edit Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Menu;