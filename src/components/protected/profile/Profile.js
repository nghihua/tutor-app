import { useCallback, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFetch, useAuth, useMountStatus } from "hooks";
import { includeCredentials } from "app-util";
import {
  ProfileEdit,
  ProfileView,
  LoadingScreen,
  ErrorMessage,
} from "components";

const Profile = () => {
  const { id } = useParams();
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { isMounted } = useMountStatus();

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
  const handleSaveSuccess = (refetch) => {
    refetch.then(() => {
      isMounted() && setIsEditing(false);
    });
  };

  const handleSaveError = (err) => {
    console.error(err);
  };

  return (
    <div className="profile">
      {isLoading && <LoadingScreen />}
      {error && <ErrorMessage error={error} />}
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

export { Profile };
