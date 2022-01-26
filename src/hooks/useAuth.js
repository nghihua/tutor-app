import { useContext } from "react";
import { AuthContext } from "components";

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
