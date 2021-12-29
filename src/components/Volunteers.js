import VolunteerList from "./VolunteerList";
import ProfileEdit from './ProfileEdit';
import { useState } from "react";
import $ from "jquery";

const Volunteers = () => {
  const volunteers = [
    {
      "email": "xxxx1@student.vgu.edu.vn",
      "fullName": "Nguyen Van A",
      "major": "CSE",
      "intake": "2019",
      "subject": "Math, C Programming",
    },
    {
      "email": "xxxx2@student.vgu.edu.vn",
      "fullName": "Le Anh B",
      "major": "MEN",
      "intake": "2018",
      "subject": "German",
    },
    {
      "email": "xxxx3@student.vgu.edu.vn",
      "fullName": "Pham Thi C",
      "major": "ECE",
      "intake": "2020",
      "subject": "Explore Engineering",
    }
  ];

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

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = newProfile => {
    console.log(JSON.stringify(newProfile));
    setProfile(newProfile);
    setIsEditing(false);
  };

  const cancel = () => {
    setIsEditing(false);
  }

  return (
    <div className="volunteers">
      <VolunteerList volunteers={volunteers} />
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Do you want to be a volunteer?
      </button>

      <div className="modal fade" id="exampleModal" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Do you want to be a volunteer?</h5>
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
      </div>
    </div>
  );
}

export default Volunteers;