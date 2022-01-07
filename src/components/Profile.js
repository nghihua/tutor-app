import { useState } from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";
import { useFetch, useConst } from "../hooks/custom-hooks";
import { useEffect } from "react";

const Profile = ({ id }) => {
  // const [profile, setProfile] = useState({
  //   email: "xxxx1@student.vgu.edu.vn",
  //   fullName: "Nguyen Van A",
  //   major: "CSE",
  //   intake: "2019",
  //   isTutor: true,
  //   subjects: ["Math", "C Programming"],
  // });
  const requestInit = useConst({ credentials: "include" });
  const options = { asEffect: true, throwError: false };

  const {
    data: user,
    error,
    isLoading,
  } = useFetch(`http://localhost:5000/api/user/${id}`, requestInit, options);

  const { data: canEdit } = useFetch(
    `http://localhost:5000/api/user/${id}/edit_permission`,
    requestInit,
    options
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newProfile) => {
    console.log(JSON.stringify(newProfile));
    // setProfile(newProfile);
    setIsEditing(false);
  };

  return (
    <div className="profile">
      {JSON.stringify(user)}
      <br />
      <br />
      {JSON.stringify(canEdit)}
      {/* {isEditing ? (
        <ProfileEdit
          user={user}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <ProfileView
          user={user}
          isOwner={canEdit}
          onEdit={() => setIsEditing(true)}
        />
      )} */}
    </div>
  );
};

export default Profile;
