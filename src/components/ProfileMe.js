import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/custom-hooks";

const ProfileMe = () => {
  const auth = useAuth();
  const location = useLocation();
  return (
    <Navigate
      to={{ ...location, pathname: `/profile/${auth.user.user_id}` }}
      state={location.state}
      replace
    />
  );
};

export default ProfileMe;
