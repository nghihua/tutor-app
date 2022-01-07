import VolunteerList from "./VolunteerList";
import ProfileEdit from './ProfileEdit';
import { useState, useEffect } from "react";

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
    },
    {
      "email": "xxxx4@student.vgu.edu.vn",
      "fullName": "Nguyen Tuan D",
      "major": "ECE",
      "intake": "2019",
      "subject": "Explore Engineering",
    },
    {
      "email": "xxxx5@student.vgu.edu.vn",
      "fullName": "Vo Quang E",
      "major": "ECE",
      "intake": "2019",
      "subject": "Explore Engineering",
    },
    {
      "email": "xxxx6@student.vgu.edu.vn",
      "fullName": "Nguyen Tien F",
      "major": "ARC",
      "intake": "2018",
      "subject": "Physics",
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

  useEffect(() => {
    var myModal = document.getElementById('button1');
    myModal.click();
  })

  return (
    <div className="volunteers">
      <VolunteerList volunteers={volunteers} />
      <button type="button" id = "button1" className="btn btn-primary invisible" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Do you want to be a volunteer?
      </button>

      <div className="temp modal fade" id="exampleModal" data-keyboard="false" data-backdrop="static">
        <div class="popUp modal-dialog modal-dialog-scrollable">
          <div class="temp modal-content">
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