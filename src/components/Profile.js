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
      navigate(location, { replace: true, state: { isEditing: value } });
    },
    [isEditing, navigate, location]
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
    console.error(err);
    alert("An error has occurred.");
  };

  return (
    <div className="profile">
      {isLoading.some(Boolean) && <h3>Loading...</h3>}
      {errorUser && (
        <>
          <h4>An error has occurred</h4>
          <p>{errorUser.message}</p>
        </>
      )}

      {user &&
        (isEditing ? (
          <ProfileEdit
            user={user}
            onSaveSuccess={handleSaveSuccess}
            onSaveError={handleSaveError}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <ProfileView
            user={user}
            canEdit={canEdit}
            onEdit={() => setIsEditing(true)}
          />
        ))}
    </div>
  );
};

export default Profile;
