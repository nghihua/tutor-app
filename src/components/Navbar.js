import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/custom-hooks";
// import { TestModalBtn } from "components";

const Navbar = ({ onlyBanner }) => {
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
          toast.error("An error has occurred.");
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

          {/* <TestModalBtn /> */}
        </div>

        <div className="secondfloor">
          <Link to="/" className="redirect">
            <div className="section">Home</div>
          </Link>

          <Link to="/volunteers" className="redirect">
            <div className="section">Volunteers</div>
          </Link>

          {auth.isLoggedIn === false ? (
            <Link to="/login" className="redirect" state={{ from: location }}>
              <div className="section">Log In</div>
            </Link>
          ) : (
            <>
              <Link
                to={`/profile/${auth.user?.user_id ?? ""}`}
                className="redirect"
              >
                <div className="section">My Profile</div>
              </Link>

              <Link to="/" className="redirect" onClick={handleLogOut}>
                <div className="section">Log Out</div>
              </Link>
            </>
          )}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;