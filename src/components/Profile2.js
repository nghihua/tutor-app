import ProfileEdit from "./ProfileEdit";

const Profile2 = () => {
  const volunteer = {
    "email": "00001@student.vgu.edu.vn",
    "fullName": "Nguyen Van A",
    "major": "CSE",
    "intake": 2019,
    "subject": "Math, C Programming",
  };

  const handleSave = newProfile => {
    console.log(JSON.stringify(newProfile));
  };

  return (
    <div className="volunteer-profile">
      <ProfileEdit current={volunteer} onSave={handleSave} />
    </div>
  );
}

export default Profile2;