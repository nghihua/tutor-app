import { Link } from "react-router-dom";

const VolunteerPreview = ({ user: { user_id, full_name, major, intake } }) => {
  const linkTo = `/profile/${user_id}`;

  return (
    <div className="volunteer-preview">
      <div className="volunteer-block" background-color="white">
        <span className="box1">
          <Link to={linkTo}>
            <img
              src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              alt="profile pic"
              width="90"
              height="90"
              className="image"
            />
          </Link>
        </span>

        <span className="volunteer-info">
          <div className="box2">
            <h2>{full_name}</h2>
            <p>
              {major} {intake}
            </p>
          </div>

          <Link to={linkTo}>
            <div className="seemore">
              <div className="rotate">See more</div>
            </div>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default VolunteerPreview;
