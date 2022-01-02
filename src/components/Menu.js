import React from "react";
import { Link } from 'react-router-dom'
const Navbar = ({ Logout }) => {
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

      <div className="redirect">
        <Link to="/">Home</Link>
        <Link to="/profile">Edit Profile</Link>
        <Link to="/" onClick={() => Logout()}>Log out</Link>
      </div>
    </nav>
  );
};

export default Navbar;