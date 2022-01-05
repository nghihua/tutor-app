import { Navigate, useLocation } from 'react-router-dom'
import { React } from 'react'
import Menu from './Menu';
import useFetch2 from './useFetch2'
// Một hàm fetch data từ server về đây?

const ProtectedRoute = ({ component: Component }) => {
  let location = useLocation();
  // const Logout =() =>{
  //   setIsAuth(true);
  // }
  const url = 'http://localhost:5000/api/auth/login_status';

  const {data: auth, error} = useFetch2(url);
  if (auth) {
    console.log(auth);
    return (
      <div className="user">
        <Menu />
        <Component />
      </div>
    )
  }
  else {
    console.log(auth);
    alert("You must login to see the page")
    return <Navigate to='/login' state={{ from: location }} />
  }
}

export default ProtectedRoute;
