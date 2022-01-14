import { useState } from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";
import { useFetch } from "../hooks/custom-hooks";
import { useParams } from "react-router-dom";

const includeCredentials = { credentials: "include" };

const Profile = () => {
  const { id } = useParams();

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

  const {
    isLoading: isSaving,
    doFetch: requestSave,
    abortFetch: abortSave,
  } = useFetch();

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newProfile) => {
    requestSave(`http://localhost:5000/api/user/${id}/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProfile),
      credentials: "include",
    })
      .then(() => {
        const load = loadProfile();
        alert("Saved successfully!");
        return load;
      })
      .then(() => setIsEditing(false))
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
          alert("An error has occurred.");
        }
      });
  };

  return (
    <div className="profile">
      {isLoading.some(Boolean) && <h3>Loading...</h3>}
      {errorUser ? (
        <h3>{errorUser.message}</h3>
      ) : (
        user &&
        (isEditing ? (
          <ProfileEdit
            user={user}
            onSave={handleSave}
            onCancel={() => {
              isSaving && abortSave();
              setIsEditing(false);
            }}
            isSaving={isSaving}
          />
        ) : (
          <ProfileView
            user={user}
            canEdit={canEdit}
            onEdit={() => setIsEditing(true)}
          />
        ))
      )}
    </div>
  );
};

export default Profile;
