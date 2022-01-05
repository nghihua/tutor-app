import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import useFetch from "./useFetch2";
const Navbar = () => {
  const Logout = () =>{
    const navigate = useNavigate();
    const url = "http://localhost:5000/api/auth/logout";
    const {data, error} = useFetch(url);
    navigate('/home')
  }
  
  return (
    <nav expand="lg" className="fixed-top b-5">
      <Link to="/">
        <img 
          src="https://i.ibb.co/hDnvX38/logo-removebg-preview-removebg-preview.png"
          alt="Tutor logo"
          className="logo"
        />
        <div className="brand">Tutor</div>
      </Link>
      {/* try to figure how to connect Bootstrap and react router */}
      {/* <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/EditProfile">Edit Profile</Nav.Link> */}
      {/* replace the Nav.Link with Link router */}

      <Link to="/" className="redirect" onClick={() => Logout()}>Log out</Link>
      <Link to="/profile" className="redirect">My Profile</Link>
      <Link to="/" className="redirect">Home</Link>
    </nav>
  );
};

export default Navbar;