const VolunteerList = ({ volunteers }) => {
  return (
    <ul className="volunteer-list">

      {volunteers.map(({ email, fullName, major, intake }) => (
        <li className="volunteer-preview" key={email} >
          <a href={`/${email}`}>
            <img
              src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              alt="profile pic"
              width="45"
              height="45"
            />
            <h2>{fullName}</h2>
            <p>{major} {intake}</p>
          </a>
        </li>
      ))}

    </ul>
  );
}

export default VolunteerList;