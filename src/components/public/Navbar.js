import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "hooks";
import { notifyError } from "app-util";
import { TestModalBtn } from "components";
import { toast } from "react-toastify";

const Navbar = ({ link, linkName }) => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event.preventDefault();

    if (auth.isLoggedIn) {
      auth.logOut(() => {
        toast.success("Log out successfully")
        navigate("/");
      }, notifyError);
    }
  };
  return (
    
    <>

      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top nav-text">
        <Link to="/" class="navbar-brand brand">
          <img src="favicon.png" alt="Tutor" className="brand logo"/>
          Tutor
        </Link>

        {/* <TestModalBtn /> */}
        <div className="float-right nav-item dropdown ml-auto d-lg-none">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img
                    src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                    alt="profile pic"
                    width="50"
                    height="50"
                    className="rounded-circle"
                  />
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenu">
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

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse pl-5" id="navbarNav">
          <div class="navbar-nav d-flex col-12 background">
        {link ? (
          
          <>
              <Link to="/" class="nav-item nav-link my-lg-4 my-2 p-4">
                <span >Home</span>
              </Link>
            
              <Link to={link} class="nav-item nav-link my-lg-4 my-2 p-4">
                <span>{linkName}</span>
              </Link>
            </>
            
        ) : (
          <>
              <Link to="/" class="nav-item nav-link my-lg-4 my-2 p-4">
                <span>Home</span>
              </Link>
            
              <Link to="/tutors" class="nav-item nav-link my-lg-4 my-2 p-4">
                <span>Our Tutors</span>
              </Link>
            

            {auth.isLoggedIn === false ? (
                <Link to="/login" class="nav-item nav-link my-lg-4 my-2 p-4" state={{ from: location }}>
                  <span>Log In</span>
                </Link>
          
            ) : (
              <div className="float-right nav-item dropdown ml-auto my-4 p-2 d-none d-lg-block d-xl-block">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        </div>


      </nav> 

      <Outlet />
    </>
  );
};

export { Navbar };
