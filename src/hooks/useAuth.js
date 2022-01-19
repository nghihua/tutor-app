import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
