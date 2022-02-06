import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "hooks";
import { notifyError } from "app-util";
import { TestModalBtn } from "components";

const Navbar = ({ link, linkName }) => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event.preventDefault();

    if (auth.isLoggedIn) {
      auth.logOut(() => {
        navigate("/");
      }, notifyError);
    }
  };
  return (
    
    <>
      
          {/* <TestModalBtn /> */}
      {/* <nav expand="lg" className="main-nav fixed-top b-5">
        <div className="firstfloor">
          <Link to="/">
            <img src="favicon.png" alt="Tutor" className="logo" />
            <div className="brand">Tutor</div>
          </Link>

        </div>

        {link ? (
          <>
            <div className="secondfloor">
              <Link to="/" className="redirect">
                <div className="section">Home</div>
              </Link>
              <Link to={link} className="redirect">
                <div className="section">{linkName}</div>
              </Link>
            </div>
          </>
        ) : (
          <div className="secondfloor">
            <Link to="/" className="redirect">
              <div className="section">Home</div>
            </Link>

            <Link to="/tutors" className="redirect">
              <div className="section">Our Tutors</div>
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
        )}
      </nav> */}

      <nav class="navbar navbar-expand-lg main-nav sticky-top pl-5">
        <Link to="/" class="navbar-brand brand">
          <img src="favicon.png" alt="Tutor" width="50" height="50"/>
          Tutor
        </Link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse pl-5" id="navbarNav">
        <ul class="navbar-nav">
        {link ? (
            <>
              <li class="nav-item">
              <Link to="/" class="nav-link">
                <span>Home</span>
              </Link>
            </li>
            
            <li class="nav-item">
              <Link to={link} class="nav-link">
                <span>{linkName}</span>
              </Link>
            </li>
            </>
            
              
          
        ) : (
          <>
            <li class="nav-item">
              <Link to="/" class="nav-link">
                <span>Home</span>
              </Link>
            </li>
            
            <li class="nav-item">
              <Link to="/tutors" class="nav-link">
                <span>Our Tutors</span>
              </Link>
            </li>
            

            {auth.isLoggedIn === false ? (
              <li class="nav-item">
                <Link to="/login" class="nav-link" state={{ from: location }}>
                  <span>Log In</span>
                </Link>
              </li>
            ) : (
              <>
                <Link
                  to={`/profile/${auth.user?.user_id ?? ""}`}
                  class="nav-link"
                >
                  <span>My Profile</span>
                </Link>

                <Link to="/" onClick={handleLogOut} class="nav-link">
                  <span>Log Out</span>
                </Link>
              </>
            )}
            </>
        )}
        </ul>
        </div>


      </nav> 



      <Outlet />
    </>
  );
};

export { Navbar };
