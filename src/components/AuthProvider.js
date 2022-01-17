import { createContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/custom-hooks";
import { includeCredentials } from "../utils";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const { doFetch } = useFetch(undefined, includeCredentials, {
    usingState: false,
  });

  const logOut = (callback) => {
    setAuth((prev) => ({ ...prev, isLoggedIn: false, user: null }));
    callback();
  };

  const [auth, setAuth] = useState({ isLoggedIn: null, user: null, logOut });

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const isLoggedIn = await doFetch(
          "http://localhost:5000/api/auth/login_status"
        );
        const user = isLoggedIn
          ? await doFetch("http://localhost:5000/api/user/current")
          : null;

        setAuth((prev) => ({ ...prev, isLoggedIn, user }));
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      }
    };

    fetchAuth();
  }, [doFetch]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export { AuthContext };
