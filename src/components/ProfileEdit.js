import { useState } from "react";

const ProfileEdit = ({ current, onSave }) => {
  // Profile states
  const [fullName, setFullName] = useState(current.fullName);
  const [major, setMajor] = useState(current.major);
  const [intake, setIntake] = useState(current.intake);
  const [subject, setSubject] = useState(current.subject);

  const handleSubmit = e => {
    e.preventDefault();

    const newProfile = { fullName, major, intake, subject };
    onSave(newProfile);
  };

  const isNotChanged = () => (
    current.fullName === fullName &&
    current.major === major &&
    current.intake === intake &&
    current.subject === subject
  );

  return (
    <form onSubmit={handleSubmit}>
      <img
        src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
        alt="profile pic"
        width="100"
        height="100"
      />

      <label>Full name:</label>
      <input
        type="text"
        required
        value={fullName}
        onChange={e => setFullName(e.target.value)}
      />

      <label>Major:</label>
      <select
        value={major}
        onChange={e => setMajor(e.target.value)}
      >
        <option value="ECE">EEIT/ECE</option>
        <option value="MEN">MEN</option>
        <option value="CSE">CSE</option>
        <option value="BFA">BFA</option>
        <option value="BBA">BBA</option>
        <option value="BCE">BCE</option>
        <option value="ARC">ARC</option>
      </select>

      <label>Intake:</label>
      <input
        type="number"
        min="2008"
        max={new Date().getFullYear()}
        step="1"
        required
        value={intake}
        onChange={e => setIntake(e.target.value)}
      />

      <label>Subject:</label>
      <input
        type="text"
        required
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />

      <button disabled={isNotChanged()}>Save</button>
    </form >
  );
}

export default ProfileEdit;