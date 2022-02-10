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

      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top nav-text">
        <Link to="/" class="navbar-brand brand">
          <img src="favicon.png" alt="Tutor" width="50" height="50" className="brand logo"/>
          Tutor
        </Link>

        {/* <TestModalBtn /> */}

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse pl-5" id="navbarNav">
          <div class="navbar-nav">
        {link ? (
          
          <>
              <Link to="/" class="nav-item nav-link my-lg-4">
                <span >Home</span>
              </Link>
            
              <Link to={link} class="nav-item nav-link my-lg-4">
                <span>{linkName}</span>
              </Link>
            </>
            
        ) : (
          <>
              <Link to="/" class="nav-item nav-link my-lg-4">
                <span>Home</span>
              </Link>
            
              <Link to="/tutors" class="nav-item nav-link my-lg-4">
                <span>Our Tutors</span>
              </Link>
            

            {auth.isLoggedIn === false ? (
                <Link to="/login" class="nav-item nav-link my-lg-4" state={{ from: location }}>
                  <span>Log In</span>
                </Link>
          
            ) : (
              <div className="float-right nav-item dropdown my-3 mx-2">
                <a className="nav-link  dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img
                    src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                    alt="profile pic"
                    width="50"
                    height="50"
                    className="rounded-circle"
                  />
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link
                  to={`/profile/${auth.user?.user_id ?? ""}`}
                  class="dropdown-item"
                  >
                    <span>My Profile</span>
                  </Link>

                  <Link to="/" onClick={handleLogOut} class="dropdown-item">
                    <span>Log Out</span>
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
        </div>
        {/* <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div> */}
        </div>


      </nav> 

      <Outlet />
    </>
  );
};

export { Navbar };
