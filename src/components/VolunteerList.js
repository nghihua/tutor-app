const VolunteerList = ({ volunteers }) => {
  return (
    <ul className="volunteer-list">

      {volunteers.map(({ email, fullName, major, intake }) => (
        <li className="volunteer-preview" key={email} >
          <div class="row justify-content-center p-5" background-color="white">
            <div class="justify-content-center">
              <a href={`/${email}`}>
                <img
                  src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                  alt="profile pic"
                  width="90"
                  height="90"
                  class="image"
                />
              </a>
            </div>
            <div class="justify-content-center">
              <a>
                <div>
                  <h2>{fullName}</h2>
                  <p>{major} {intake}</p>
                </div>
              </a>
            </div>
            
          </div>
        </li>
      ))}

    </ul>
  );
}

export default VolunteerList;