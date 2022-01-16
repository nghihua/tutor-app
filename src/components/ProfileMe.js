import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/custom-hooks";
import { includeCredentials } from "../utils";

const ProfileMe = () => {
  const navigate = useNavigate();
  const { doFetch: fetchCurrentUser } = useFetch(
    "http://localhost:5000/api/user/current",
    includeCredentials,
    { usingState: false }
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCurrentUser()
      .then((user) => {
        navigate(`/profile/${user.user_id}`, { replace: true });
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("An error has occurred.");
          console.error(err);
        }
      });
  }, [fetchCurrentUser, navigate]);

  return <h3>{error || "Loading..."}</h3>;
};

export default ProfileMe;
