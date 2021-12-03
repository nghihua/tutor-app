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
    <form onSubmit={handleSubmit} class="container">
      <div className="text-center pb-5 pt-5">
        <img
          src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          alt="profile pic"
          width="100"
          height="100"
          class="image"
        />
      </div>

      <div class="form-group row">
        <label class="col col-form-label">Full name:</label>
        <div class="col-6">
          <input
            type="text"
            required
            value={fullName}
            class="form-control"
            onChange={e => setFullName(e.target.value)}
          />
        </div>
      </div>
      
      <div class="form-group row">
        <label class="col col-form-label">Major:</label>
        <div class="col-6">
          <select
            value={major}
            onChange={e => setMajor(e.target.value)}
            class="form-control"
          >
            <option value="ECE">EEIT/ECE</option>
            <option value="MEN">MEN</option>
            <option value="CSE">CSE</option>
            <option value="BFA">BFA</option>
            <option value="BBA">BBA</option>
            <option value="BCE">BCE</option>
            <option value="ARC">ARC</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label class="col col-form-label">Intake:</label>
        <div class="col-6">
          <input
            type="number"
            min="2008"
            max={new Date().getFullYear()}
            step="1"
            required
            value={intake}
            onChange={e => setIntake(e.target.value)}
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group row">
        <label class="col col-form-label">Subject:</label>
        <div class="col-6">
          <input
            type="text"
            required
            value={subject}
            onChange={e => setSubject(e.target.value)}
            class="form-control"
          />
        </div>
      </div>

      <div className="text-center pt-5">
        <button disabled={isNotChanged()} class="btn btn-primary btn-lg">Save</button>
      </div>
    </form >
  );
}

export default ProfileEdit;