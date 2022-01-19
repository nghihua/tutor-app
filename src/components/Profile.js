import { useCallback, useEffect } from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";
import { useFetch, useAuth } from "../hooks/custom-hooks";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { includeCredentials } from "../utils";

const Profile = () => {
  const { id } = useParams();
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // load user data
  const {
    data,
    error,
    isLoading,
    doFetch: loadProfile,
  } = useFetch(`http://localhost:5000/api/user/${id}`, includeCredentials, {
    throwError: false,
  });

  const isOwner = id === auth.user.user_id;

  useEffect(() => {
    if (!isOwner) {
      loadProfile();
    }
  }, [isOwner, loadProfile]);

  const user = isOwner ? auth.user : data;
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
    if (isOwner === false && isEditing) {
      setIsEditing(false);
    }
  }, [isOwner, isEditing, setIsEditing]);

  // save profile callbacks
  const handleSaveSuccess = () => {
    loadProfile().then(() => setIsEditing(false));
    alert("Saved successfully!");
  };

  const handleSaveError = (err) => {
    console.error(err);
    alert("Unable to save. An error has occurred.");
  };

  return (
    <div className="profile">
      {isLoading && <h3>Loading...</h3>}
      {error && (
        <>
          <h4>An error has occurred</h4>
          <p>{error.message}</p>
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
            canEdit={isOwner}
            onEdit={() => setIsEditing(true)}
          />
        ))}
    </div>
  );
};

export default Profile;
