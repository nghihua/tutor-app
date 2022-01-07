import VolunteerPreview from "./VolunteerPreview";
// import ProfileEdit from "./ProfileEdit";
// import { useState, useEffect } from "react";
import { useFetch, useConst } from "../hooks/custom-hooks";

const Volunteers = () => {
  const {
    data: tutors,
    error,
    isLoading,
  } = useFetch(
    "http://localhost:5000/api/user/tutors",
    useConst({ credentials: "include" }),
    { asEffect: true, throwError: false }
  );

  // const [profile, setProfile] = useState({
  //   email: "xxxx1@student.vgu.edu.vn",
  //   fullName: "Nguyen Van A",
  //   major: "CSE",
  //   intake: "2019",
  //   isTutor: true,
  //   subjects: ["Math", "C Programming"],
  // });

  // const [isEditing, setIsEditing] = useState(false);

  // const handleSave = (newProfile) => {
  //   console.log(JSON.stringify(newProfile));
  //   setProfile(newProfile);
  //   setIsEditing(false);
  // };

  // const cancel = () => {
  //   setIsEditing(false);
  // };

  // useEffect(() => {
  //   var myModal = document.getElementById("button1");
  //   myModal.click();
  // });

  console.log(tutors);
  return (
    <div className="volunteers">
      {isLoading && <h3>Loading...</h3>}
      {error?.message}
      {tutors && (
        <ul className="volunteer-list center">
          {tutors.map((tutor) => (
            <VolunteerPreview user={tutor} key={tutor.user_id} />
          ))}
        </ul>
      )}
      {/* <button
        type="button"
        id="button1"
        className="btn btn-primary invisible"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Do you want to be a volunteer?
      </button>

      <div
        className="temp modal fade"
        id="exampleModal"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div class="popUp modal-dialog modal-dialog-scrollable">
          <div class="temp modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Do you want to be a volunteer?
              </h5>
            </div>
            <div class="modal-body">
              <ProfileEdit
                profile={profile}
                onSave={handleSave}
                onCancel={cancel}
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Volunteers;
