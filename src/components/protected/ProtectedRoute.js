import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "hooks";
import { LoadingScreen, ErrorMessage } from "components";

const ProtectedRoute = () => {
  const auth = useAuth();
  const location = useLocation();

  if (auth.error) {
    return <ErrorMessage error={auth.error} />;
  }

  if (auth.isLoggedIn === null) {
    return <LoadingScreen />;
  }

  if (!auth.isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export { ProtectedRoute };
