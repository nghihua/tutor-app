import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useFetch, useAuth } from "hooks";
import { toastAbortablePromise } from "app-util";

const subjectList = [
  "Math",
  "Physics",
  "C Programming",
  "Database",
  "German",
  "Calculus",
  "Algebra",
  "English",
];

const arrayEquals = (a, b) =>
  a.length === b.length && a.every((val, index) => val === b[index]);

const ProfileEdit = ({
  user: current,
  onSaveSuccess,
  onSaveError,
  onCancel,
  checkIsTutor = false,
  disableToast = false,
}) => {
  // Profile states
  const [fullName, setFullName] = useState(current.full_name);
  const [major, setMajor] = useState(current.major);
  const [intake, setIntake] = useState(current.intake);
  const [isTutor, setIsTutor] = useState(checkIsTutor || current.is_tutor);
  const [subjects, setSubjects] = useState(current.subjects);

  const auth = useAuth();

  const {
    isLoading: isSaving,
    doFetch: requestSave,
    abortFetch: abortSave,
  } = useFetch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProfile = {
      full_name: fullName,
      major,
      intake,
      is_tutor: isTutor,
      subjects,
    };

    // make edit request
    const save = requestSave(
      `http://localhost:5000/api/user/${current.user_id}/edit`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProfile),
        credentials: "include",
      }
    );

    save.then(
      (res) => {
        const refetch = auth.refetchUser();
        onSaveSuccess?.(refetch, res);
      },
      (err) => {
        if (err.name !== "AbortError") {
          onSaveError?.(err);
        }
      }
    );

    // toast
    if (!disableToast) {
      toastAbortablePromise(save, {
        pending: "Saving...",
        success: "Saved successfully!",
        error: (
          <>
            Unable to save.
            <br />
            An error has occurred.
          </>
        ),
      });
    }
  };

  const handleCancel = () => {
    isSaving && abortSave();
    onCancel?.();
  };

  const isNotChanged = () =>
    current.full_name === fullName &&
    current.major === major &&
    current.intake === intake &&
    current.is_tutor === isTutor &&
    arrayEquals(current.subjects, subjects);

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
        <label className="title" htmlFor="name">
          Full name:
        </label>
        <input
          id="name"
          type="text"
          required
          value={fullName}
          className="form-control"
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your name..."
        />
      </div>

      <div className="section form-group row">
        <label className="title" htmlFor="major">
          Major:
        </label>
        <select
          id="major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
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

      <div className="section form-group row">
        <label htmlFor="intake" className="title">
          Intake:
        </label>
        <input
          id="intake"
          type="number"
          min="2008"
          max={new Date().getFullYear()}
          step="1"
          required
          value={intake}
          onChange={(e) => setIntake(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="section form-group row">
        <label htmlFor="is-tutor" className="title">
          Is tutor:
        </label>
        <input
          id="is-tutor"
          type="checkbox"
          className="checkBox"
          checked={isTutor}
          onChange={() => setIsTutor(!isTutor)}
        />
      </div>

      {
        // Only show if isTutor
        isTutor && (
          <div className="section form-group row">
            <label className="title">Subjects:</label>
            <div className="subject-box">
              <Typeahead
                className="typo"
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
        )
      }

      <div className="data-buttons">
        <button className="clickButton" disabled={isSaving || isNotChanged()}>
          Save
        </button>

        <button type="button" className="clickButton" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export { ProfileEdit };
