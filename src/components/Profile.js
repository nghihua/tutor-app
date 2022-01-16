import { useCallback, useEffect } from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";
import { useFetch } from "../hooks/custom-hooks";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { includeCredentials } from "../utils";

const Profile = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // load user data
  const {
    data: [user, canEdit],
    error: [errorUser],
    isLoading,
    doFetch: loadProfile,
  } = useFetch(
    [
      `http://localhost:5000/api/user/${id}`,
      `http://localhost:5000/api/user/${id}/edit_permission`,
    ],
    includeCredentials,
    { asEffect: true, throwError: false }
  );
  user && (user.subjects ??= []); // set to empty array if null, for display convenience

  // isEditing state
  const isEditing = location.state?.isEditing ?? false;
  const setIsEditing = useCallback(
    (value) => {
      if (isEditing === value) return;
      navigate("", { replace: true, state: { isEditing: value } });
    },
    [isEditing, navigate]
  );

  useEffect(() => {
    if (canEdit === false && isEditing) {
      setIsEditing(false);
    }
  }, [canEdit, isEditing, setIsEditing]);

  // save profile callbacks
  const handleSaveSuccess = () => {
    loadProfile().then(() => setIsEditing(false));
    alert("Saved successfully!");
  };

  const handleSaveError = (err) => {
    if (err.name !== "AbortError") {
      console.error(err);
      alert("An error has occurred.");
    }
  };

  // render
  const renderProfile = () => {
    if (isLoading.some(Boolean)) {
      return <h3>Loading...</h3>;
    }
    if (errorUser) {
      return <h3>{errorUser.message}</h3>;
    }

    if (user) {
      if (isEditing) {
        return (
          <ProfileEdit
            user={user}
            onSaveSuccess={handleSaveSuccess}
            onSaveError={handleSaveError}
            onCancel={() => setIsEditing(false)}
          />
        );
      }
      return (
        <ProfileView
          user={user}
          canEdit={canEdit}
          onEdit={() => setIsEditing(true)}
        />
      );
    }
    return null;
  };

  return <div className="profile">{renderProfile()}</div>;
};

export default Profile;
