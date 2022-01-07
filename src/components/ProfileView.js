const ProfileView = ({
  user: { full_name, major, intake, is_volunteer, subjects },
  canEdit,
  onEdit,
}) => {
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

        <h4>{full_name}</h4>

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
          is_volunteer && (
            <div className="tutor-detail">
              <h2>Tutor:</h2>
              <div className="row d-flex justify-content-center">
                <p className="title">Subjects</p>
                <div className="subject-box">
                  <p className="info">
                    {subjects.map((s) => (
                      <div>
                        {s}
                        <br />
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          )
        }
      </div>
      {canEdit && (
        <button type="button" className="clickButton" onClick={onEdit}>
          Edit
        </button>
      )}
    </main>
  );
};

export default ProfileView;
