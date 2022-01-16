// import ProfileEdit from "./ProfileEdit";
import { useEffect } from "react";
import { useFetch } from "../hooks/custom-hooks";
import { includeCredentials } from "../utils";
import VolunteerList from "./VolunteerList";

const Volunteers = () => {
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
  const {
    data: tutors,
    error,
    isLoading,
  } = useFetch("http://localhost:5000/api/user/tutors", includeCredentials, {
    asEffect: true,
    throwError: false,
  });

  useEffect(() => {
    // var myModal = document.getElementById("button1");
    // myModal.click();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div className="volunteers">
      {tutors && <VolunteerList volunteers={tutors} />}

      {/* Modal  */}
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
        className="modal fade"
        id="exampleModal"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
          <div class="modal-content">
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
