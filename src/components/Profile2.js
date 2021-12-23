import { useState, Fragment } from "react";
import ProfileEdit from "./ProfileEdit";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Profile2 = () => {
  const [volunteer, setVolunteer] = useState({
    "email": "xxxx1@student.vgu.edu.vn",
    "fullName": "Nguyen Van A",
    "major": "CSE",
    "intake": "2019",
    "subject": "Math, C Programming",
  });

  const handleSave = newProfile => {
    console.log(JSON.stringify(newProfile));
    setVolunteer(newProfile);
  };

  return (
    <div>
      {/* <Navbar bg="light" expand="lg" className="fixed-top">
            <Container fluid>
                <Navbar.Brand href="#" style={{color:"#7B61FF"}}>Tutor</Navbar.Brand>
                <Nav className="justify-content-end" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Edit Profile</Nav.Link>
                </Nav>
            </Container>
      </Navbar> */}
      {/* no need navbar */}
      <div className="volunteer-profile pt-5 mb-5">
        <ProfileEdit current={volunteer} onSave={handleSave} />
      </div>
    </div>
  );
}

export default Profile2;