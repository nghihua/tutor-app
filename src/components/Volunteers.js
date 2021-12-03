import { Fragment } from "react";
import VolunteerList from "./VolunteerList";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Volunteers = () => {
  const volunteers = [
    {
      "email": "xxxx1@student.vgu.edu.vn",
      "fullName": "Nguyen Van A",
      "major": "CSE",
      "intake": "2019",
      "subject": "Math, C Programming",
    },
    {
      "email": "xxxx2@student.vgu.edu.vn",
      "fullName": "Le Anh B",
      "major": "MEN",
      "intake": "2018",
      "subject": "German",
    },
    {
      "email": "xxxx3@student.vgu.edu.vn",
      "fullName": "Pham Thi C",
      "major": "ECE",
      "intake": "2020",
      "subject": "Explore Engineering",
    }
  ];

  return (
    <Fragment>
        <Navbar bg="light" expand="lg" className="fixed-top">
            <Container fluid>
                <Navbar.Brand href="#" style={{color:"#7B61FF"}}>Tutor</Navbar.Brand>
                <Nav className="justify-content-end" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Edit Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div className="volunteers pt-5">
          <VolunteerList volunteers={volunteers} />
        </div>
        <footer>
               <p class="d-flex justify-content-center footer footer1 font-weight-bold navbar-fixed-bottom ">@tutor2021</p> 
        </footer>
    </Fragment>
  );
}

export default Volunteers;