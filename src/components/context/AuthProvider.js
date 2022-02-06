import { createContext, useEffect, useReducer } from "react";
import { useFetch } from "hooks";
import { includeCredentials, notifyError } from "app-util";

const AuthContext = createContext(null);

// action types
const LOADING = "LOADING";
const UNAUTH = "UNAUTH";
const AUTH = "AUTH";
const ERROR = "ERROR";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case UNAUTH:
      return {
        ...state,
        isLoading: false,
        error: null,
        isLoggedIn: false,
        user: null,
      };

    case AUTH:
      return {
        ...state,
        isLoading: false,
        error: null,
        isLoggedIn: true,
        user: action.payload,
      };

    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isLoggedIn: null,
        user: null,
      };

    default:
      throw new TypeError(`Unknown action type "${action.type}".`);
  }
};

// Auth context provider
const AuthProvider = ({ children }) => {
  const { doFetch } = useFetch(undefined, includeCredentials, {
    usingState: false,
    abortBeforeRefetch: false,
  });

  // auth functions
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
          dispatch({ type: AUTH, payload: user });
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
        dispatch({ type: UNAUTH });
      },
      (err) => {
        if (err.name !== "AbortError") {
          onError?.(err);
        }
      }
    );
  };

  const refetchUser = async () => {
    dispatch({ type: LOADING });

    return doFetch("http://localhost:5000/api/user/current")
      .then((user) => {
        dispatch({ type: AUTH, payload: user });
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          return;
        }

        if (err.message.startsWith("[HTTP 401]")) {
          dispatch({ type: UNAUTH });
        } else {
          dispatch({ type: ERROR, payload: err });
          notifyError(err);
        }
      });
  };

  // auth state
  const [auth, dispatch] = useReducer(authReducer, {
    isLoggedIn: null,
    user: null,
    error: null,
    isLoading: false,
    logIn,
    logOut,
    refetchUser,
  });

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        dispatch({ type: LOADING });

        const isLoggedIn = await doFetch(
          "http://localhost:5000/api/auth/login_status"
        );

        if (isLoggedIn) {
          const user = await doFetch("http://localhost:5000/api/user/current");
          dispatch({ type: AUTH, payload: user });
        } else {
          dispatch({ type: UNAUTH });
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          dispatch({ type: ERROR, payload: err });
          notifyError(err);
        }
      }
    };

    fetchAuth();
  }, [doFetch]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
