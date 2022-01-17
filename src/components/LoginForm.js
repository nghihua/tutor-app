import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/custom-hooks";
import { getFetchErrMsg } from "../utils";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null); // set error if login not correct

  // after login, navigate to where the user came from or to the index page by default
  const from = location.state?.from ?? "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    auth.logIn(
      { email, password },
      () => {
        navigate(from, { replace: true });
      },
      (err) => {
        setError(getFetchErrMsg(err.message));
        setIsSubmitting(false);
      }
    );
  };

  if (auth.isLoggedIn === null) {
    return <h3>Loading...</h3>;
  }

  if (auth.isLoggedIn) {
    return <Navigate to={from} replace />;
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Welcome!</h2>

        {error && <h4 style={{ color: "red" }}>{error}</h4>}

        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />

        <button type="submit" value="submit" disabled={isSubmitting}>
          Submit
        </button>

        <div className="toregister">
          <Link to="/register" state={location.state}>
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
