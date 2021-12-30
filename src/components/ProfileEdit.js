import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const ProfileEdit = ({ profile, onSave, onCancel }) => {
  const subjectList = ["Math", "Physics", "C Programming", "Database", "German", "Calculus", "Algebra", "English"];

  // Profile states
  const [fullName, setFullName] = useState(profile.fullName);
  const [major, setMajor] = useState(profile.major);
  const [intake, setIntake] = useState(profile.intake);
  const [isTutor, setIsTutor] = useState(profile.isTutor);
  const [subjects, setSubjects] = useState(profile.subjects);

  const handleSubmit = e => {
    e.preventDefault();

    const newProfile = { fullName, major, intake, isTutor, subjects };
    onSave(newProfile);
  };

  const isNotChanged = () => {
    const arrayEquals = (a, b) => (
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );

    return (
      profile.fullName === fullName &&
      profile.major === major &&
      profile.intake === intake &&
      profile.isTutor === isTutor &&
      arrayEquals(profile.subjects, subjects)
    );
  };

  return (
    <form className="profileedit" onSubmit={handleSubmit}>
      <div className="text-center pb-5 pt-5">
        <img
          src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          alt="profile pic"
          width="100"
          height="100"
          className="image rounded-circle"
        />
      </div>

      <div className="section form-group row">
        <label className="title" htmlFor="name">Full name:</label>
          <input
            id="name"
            type="text"
            required
            value={fullName}
            className="form-control"
            onChange={e => setFullName(e.target.value)}
            placeholder="Enter your name..."
          />
      </div>

      <div className="form-group row">
        <label htmlFor="major" className="col col-form-label">Major:</label>
        <div className="col-6">
          <select
            id="major"
            value={major}
            onChange={e => setMajor(e.target.value)}
            className="form-control"
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

      <div className="form-group row">
        <label htmlFor="intake" className="col col-form-label">Intake:</label>
        <div className="col-6">
          <input
            id="intake"
            type="number"
            min="2008"
            max={new Date().getFullYear()}
            step="1"
            required
            value={intake}
            onChange={e => setIntake(e.target.value)}
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="is-tutor" className="col col-form-label">Is Tutor:</label>
        <div className="col-6">
          <input
            id="is-tutor"
            type="checkbox"
            checked={isTutor}
            onChange={() => setIsTutor(!isTutor)}
          />
        </div>
      </div>

      {
        // Only show if isTutor
        isTutor &&
        <div className="form-group row">
          <label className="col col-form-label">Subjects:</label>
          <div className="col-6">
            <Typeahead
              id="subjects-typeahead"
              multiple
              selected={subjects}
              onChange={setSubjects}
              options={subjectList}
              placeholder="Choose the subjects you can tutor..."
              flip
              highlightOnlyResult
            />
          </div>
        </div>
      }

      <div className="text-center pt-5">
        <button
          disabled={isNotChanged()}
          className="btn btn-primary btn-lg mx-3"
          data-bs-dismiss="modal"
        >Save</button>

        <button
          type="button"
          className="btn btn-secondary btn-lg"
          onClick={onCancel}
          data-bs-dismiss="modal"
        >Cancel</button>
      </div>
    </form >
  );
}

export default ProfileEdit;