import { useState } from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";
import { useFetch, useConst } from "../hooks/custom-hooks";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const {
    data: [user, canEdit],
    isLoading: [isLoadingUser, isLoadingCanEdit],
    doFetch: loadProfile,
  } = useFetch(
    [
      `http://localhost:5000/api/user/${id}`,
      `http://localhost:5000/api/user/${id}/edit_permission`,
    ],
    useConst({ credentials: "include" }),
    { asEffect: true, throwError: false }
  );
  const { doFetch: saveUser } = useFetch();

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newProfile) => {
    saveUser(`http://localhost:5000/api/user/${id}/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProfile),
      credentials: "include",
    })
      .then(() => {
        alert("Saved successfully!");
        return loadProfile();
      })
      .then(() => setIsEditing(false))
      .catch((err) => alert(err));
  };

  return (
    <div className="profile">
      {(isLoadingUser || isLoadingCanEdit) && <h3>Loading...</h3>}
      {user &&
        (isEditing ? (
          <ProfileEdit
            user={user}
            onSave={handleSave}
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
