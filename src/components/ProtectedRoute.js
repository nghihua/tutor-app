import { Navigate, useLocation } from 'react-router-dom'
import { React } from 'react'
import Navbar from './Navbar';
// Một hàm fetch data từ server về đây?

const ProtectedRoute = ({ component: Component }) => {
  let location = useLocation();
  let isAuth = true;
  // const Logout =() =>{
  //   setIsAuth(true);
  // }
  if (isAuth) {
    console.log(isAuth);
    return (
      <div className="user">
        <Navbar />
        <Component />
      </div>
    )
  }
  else {
    console.log(isAuth);
    alert("You must login to see the page")
    return <Navigate to='/login' state={{ from: location }} />
  }
}

export default ProtectedRoute;
