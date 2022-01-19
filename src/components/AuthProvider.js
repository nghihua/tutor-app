import { createContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/custom-hooks";
import { includeCredentials } from "../utils";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const { doFetch } = useFetch(undefined, includeCredentials, {
    usingState: false,
  });

  const logIn = async (logInInfo, onSuccess, onError) => {
    return doFetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logInInfo),
      credentials: "include",
    })
      .then(() => doFetch("http://localhost:5000/api/user/current"))
      .then(
        (user) => {
          onSuccess?.(user);
          setAuth((prev) => ({ ...prev, isLoggedIn: true, user }));
        },
        (err) => {
          if (err.name !== "AbortError") {
            onError?.(err);
          }
        }
      );
  };

  const logOut = async (onSuccess, onError) => {
    return doFetch("http://localhost:5000/api/auth/logout").then(
      (res) => {
        onSuccess?.(res);
        setAuth((prev) => ({ ...prev, isLoggedIn: false, user: null }));
      },
      (err) => {
        if (err.name !== "AbortError") {
          onError?.(err);
        }
      }
    );
  };

  const refetchUser = async () => {
    return doFetch("http://localhost:5000/api/user/current")
      .then((user) => {
        setAuth((prev) => ({ ...prev, isLoggedIn: true, user }));
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      });
  };

  const [auth, setAuth] = useState({
    isLoggedIn: null,
    user: null,
    logIn,
    logOut,
    refetchUser,
  });
  auth.user && (auth.user.subjects ??= []); // set to empty array if null, for display convenience

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
