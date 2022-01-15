import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/custom-hooks";
import { includeCredentials } from "../utils";

const Navbar = ({ Logout }) => {
  const { data: user } = useFetch(
    "http://localhost:5000/api/user/current",
    includeCredentials,
    { asEffect: true, throwError: false }
  );

  const myProfileLink = user ? `/profile/${user.user_id}` : "";

  return (
    <nav expand="lg" className="main-nav fixed-top b-5">
      <div className="firstfloor">
        <Link to="/">
          <img src="favicon.png" alt="Tutor" className="logo" />
          <div className="brand">Tutor</div>
        </Link>
      </div>
      {/* try to figure how to connect Bootstrap and react router */}
      {/* <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/EditProfile">Edit Profile</Nav.Link> */}
      {/* replace the Nav.Link with Link router */}

      <div className="secondfloor">
        <div className="section">
          <Link to="/" className="redirect">
            Home
          </Link>
        </div>

        {/* <div className="section">
          <Link to="/volunteers" className="redirect">
            Volunteers
          </Link>
        </div> */}

        <div className="section">
          <Link to={myProfileLink} className="redirect">
            My Profile
          </Link>
        </div>

        <div className="section">
          <Link to="/" className="redirect" onClick={(event) => Logout(event)}>
            Log Out
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
