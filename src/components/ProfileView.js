const ProfileView = ({ profile: { fullName, major, intake, isTutor, subjects }, isOwner, onEdit }) => {
  return (
      <main className="mb-5">
      <div className="profile-detail">
        <img
          src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          alt="profile pic"
          width="90"
          height="90"
          className="image rounded-circle"
        />

        <h4>{fullName}</h4>
      
          <div className="row justify-content-center">
            <p className="title">Major:</p>
            <p className="info">{major === "ECE" ? "EEIT/ECE" : major}</p>
          </div>

          <div className="row justify-content-center">
            <p className="title">Intake:</p>
            <p className="info">{intake}</p>
          </div>
      
        {
          // Display tutor's information
          isTutor &&
          <div className="tutor-detail">
            <h2>Tutor:</h2>
            <div className="row d-flex justify-content-center">
              <p className="title">Subjects</p>
              <div className="subject-box">
              <p className="info">{subjects.map(s=><div>{s}<br/></div>)}</p>
              </div>
            </div>
          </div>
        }
        </div>
        {
          isOwner &&
            <button type="button" className="clickButton" onClick={onEdit}>Edit</button>
        }
      </main>
  );
};

export default ProfileView;