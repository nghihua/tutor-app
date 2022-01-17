import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/custom-hooks";

const ProfileMe = () => {
  const auth = useAuth();
  return <Navigate to={`/profile/${auth.user.user_id}`} replace />;
};

export default ProfileMe;
