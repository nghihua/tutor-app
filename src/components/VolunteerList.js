const VolunteerList = ({ volunteers }) => {
  return (
    <div className="volunteer-list">

      {volunteers.map(volunteer => (
        <div className="volunteer-preview" key={volunteer.email} >

          <a href={`/${volunteer.email}`}>
            <img
              src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              alt="profile pic"
              width="45"
              height="45"
            />
            <h2>{volunteer.fullName}</h2>
            <p>{volunteer.major} {volunteer.intake}</p>
          </a>

        </div>
      ))}

    </div>
  );
}

export default VolunteerList;