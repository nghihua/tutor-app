import { Link } from 'react-router-dom'

const VolunteerList = ({ volunteers }) => {
  return (
    <ul className="volunteer-list center">

      {volunteers.map(({ email, fullName, major, intake }) => (
        <li className="volunteer-preview" key={email} >
          <div className="p-5 box" background-color="white">
            <span className="box1">
              <Link to={`/volunteer/${email}`}>
              <img
                src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                alt="profile pic"
                width="90"
                height="90"
                className="image"
              />
              </Link>
            </span>
            <span className="box1">
              <Link to={`/volunteer/${email}`}>
              <div className="box2">
                <h2>{fullName}</h2>
                <p>{major} {intake}</p>
              </div>
              </Link>
            
          </span>

        </div>
        </li>
  ))
}

    </ul >
  );
}

export default VolunteerList;