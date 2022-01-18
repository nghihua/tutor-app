import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/custom-hooks";
import TestModalBtn from "./TestModalBtn";

const Navbar = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event.preventDefault();

    if (auth.isLoggedIn) {
      auth.logOut(
        () => {
          navigate("/");
        },
        (err) => {
          console.error(err);
          alert("An error has occurred.");
        }
      );
    }
  };

  return (
    <>
      <nav expand="lg" className="main-nav fixed-top b-5">
        <div className="firstfloor">
          <Link to="/">
            <img src="favicon.png" alt="Tutor" className="logo" />
            <div className="brand">Tutor</div>
          </Link>

          <TestModalBtn />
        </div>

        <div className="secondfloor">
          <div className="section">
            <Link to="/" className="redirect">
              Home
            </Link>
          </div>

          <div className="section">
            <Link to="/volunteers" className="redirect">
              Volunteers
            </Link>
          </div>

          {auth.isLoggedIn === false ? (
            <div className="section">
              <Link to="/login" className="redirect" state={{ from: location }}>
                Log In
              </Link>
            </div>
          ) : (
            <>
              <div className="section">
                <Link
                  to={`/profile/${auth.user?.user_id ?? ""}`}
                  className="redirect"
                >
                  My Profile
                </Link>
              </div>

              <div className="section">
                <Link to="/" className="redirect" onClick={handleLogOut}>
                  Log Out
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
