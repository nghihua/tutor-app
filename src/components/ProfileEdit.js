import { useState } from "react";

const ProfileEdit = ({ current, onSave }) => {
  const [profilePic, setProfilePic] = useState(current.profilePic);
  const [username, setUsername] = useState(current.username);
  const [fullName, setFullName] = useState(current.fullName);
  const [major, setMajor] = useState(current.major);
  const [subject, setSubject] = useState(current.subject);

  return (
    <form onSubmit={e => onSave(e, { profilePic, username, fullName, major, subject })}>
      <label>Username:</label>
      <input
        type="text"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Full name:</label>
      <input
        type="text"
        required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <label>Major:</label>
      <input
        type="text"
        required
        value={major}
        onChange={(e) => setMajor(e.target.value)}
      />

      <label>Subject:</label>
      <input
        type="text"
        required
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <button>Save</button>
    </form>
  );
}

export default ProfileEdit;