import { Route, Navigate, useLocation } from 'react-router-dom'
import React from 'react'
import Menu from './Menu';
// Một hàm fetch data từ server về đây?

const ProtectedRoute = ({ component: Component}) => {
  let location = useLocation();
  const isAuth = true;
  
  if (isAuth) {
    return <Component />
  }
  else {
    return <Navigate to='/' state= {{ from: location }} />
  }  
}

export default ProtectedRoute;