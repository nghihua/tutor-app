import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import useFetch2 from "./useFetch2";
const Navbar = ({Logout}) => {  
  return (
    <nav expand="lg" className="main-nav fixed-top b-5">

    <div className="firstfloor">
      <Link to="/">
        <img 
          src="favicon.png"
          alt="Tutor"
          className="logo"
        />
        <div className="brand">Tutor</div>
      </Link>
    </div>
      {/* try to figure how to connect Bootstrap and react router */}
      {/* <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/EditProfile">Edit Profile</Nav.Link> */}
      {/* replace the Nav.Link with Link router */}
    
    <div className="secondfloor">
      <div className="section">
        <Link to="/" className="redirect">Home</Link>
      </div>
      <div className="section">
        <Link to="/profile" className="redirect">My Profile</Link>
      </div>
      <div className="section">
        <Link to="/" className="redirect" onClick={(event) => Logout(event)}>Log Out</Link>
      </div>
    </div>

    </nav>
  );
};

export default Navbar;