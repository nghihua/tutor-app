import { useState } from "react";
import ProfileEdit from "./ProfileEdit";
import ProfileView from "./ProfileView";

const Profile = () => {
  const [profile, setProfile] = useState({
    "email": "xxxx1@student.vgu.edu.vn",
    "fullName": "Nguyen Van A",
    "major": "CSE",
    "intake": "2019",
    "isTutor": true,
    "subjects": [
      "Math",
      "C Programming"
    ],
  });

  const isOwner = true; // performs check on whether the profile belongs to the current logged in account
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = newProfile => {
    console.log(JSON.stringify(newProfile));
    setProfile(newProfile);
    setIsEditing(false);
  };

  return (
    <div className="profile">
      {
        isEditing ?
          <ProfileEdit
            profile={profile}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          /> :
          <ProfileView
            profile={profile}
            isOwner={isOwner}
            onEdit={() => setIsEditing(true)}
          />
      }

    </div>
  );
}

export default Profile;