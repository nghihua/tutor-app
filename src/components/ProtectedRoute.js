import { Navigate, Outlet, useLocation } from "react-router-dom";
import { React } from "react";
import { useAuth } from "../hooks/custom-hooks";

const ProtectedRoute = () => {
  const auth = useAuth();
  const location = useLocation();

  if (auth.isLoggedIn === null) {
    return <h3>Loading...</h3>;
  }

  if (!auth.isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
