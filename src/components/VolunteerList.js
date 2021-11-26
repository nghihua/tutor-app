import { Link } from 'react-router-dom';

const VolunteerList = ({ volunteers }) => {
  return (
    <div className="volunteer-list">
      {volunteers.map(volunteer => (
        <div className="volunteer-preview" key={volunteer.id} >
          <Link to={`/volunteer/${volunteer.id}`}>
            <img src={volunteer.profilePic} alt="profile" />
            <h2>{volunteer.fullName}</h2>
            <p>{volunteer.major}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default VolunteerList;