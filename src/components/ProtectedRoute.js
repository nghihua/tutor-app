import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { React } from 'react'
import Navbar from './Navbar';
import useFetch2 from './useFetch2';

const ProtectedRoute = ({ component: Component }) => {
  let navigate = useNavigate();
  let location = useLocation();
  const url = 'http://localhost:5000/api/auth/login_status';
  const { data: auth, pending, error } = useFetch2(url, true);
  const url_logout = "http://localhost:5000/api/auth/logout";
  const fetch = useFetch2(url_logout, false);
  const Logout = (event) => {
    event.preventDefault();
    fetch.doFetch()
      .then(() => navigate("/", { replace: true }));
  }
  return (
    <div>
      {!pending && auth &&
        <div className='user'>
          <Navbar Logout={Logout} />
          <Component />
        </div>}
      {!pending && !auth &&
        <div className='user'>
          <Navigate to='/login' state={{ from: location }} />
        </div>}
    </div>
  )
}
export default ProtectedRoute;
