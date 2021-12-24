const ProfileView = ({ profile: { fullName, major, intake, isTutor, subjects }, isOwner, onEdit }) => {
  return (
    <div className="container pt-3">
      <main className="mb-5">
        {
          isOwner &&
          <div className="my-5 pt-5">
            <button type="button" onClick={onEdit}>Edit</button>
          </div>
        }

        <div className="text-center">
          <img
            src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
            alt="profile pic"
            width="90"
            height="90"
            className="image rounded-circle"
          />
        </div>

        <h4 className="text-center display-7 mb-5">{fullName}</h4>
        <div className="row justify-content-center">
          <p className="mr-5  font-weight-bold">Major</p>
          <p className="ml-5">{major === "ECE" ? "EEIT/ECE" : major}</p>
        </div>

        <div className="row justify-content-center">
          <p className="mr-5  font-weight-bold">Intake</p>
          <p className="ml-5">{intake}</p>
        </div>

        {
          // Display tutor's information
          isTutor &&
          <div>
            <p className="mr-5 font-weight-bold">Tutor:</p>
            <div className="row d-flex justify-content-center">
              <p className="mr-5 font-weight-bold">Subjects</p>
              <p className="ml-5">{subjects.join(", ")}</p>
            </div>
          </div>
        }

      </main>
    </div>
  );
};

export default ProfileView;