const VolunteerList = ({ volunteers }) => {
  return (
    <ul className="volunteer-list center">

      {volunteers.map(({ email, fullName, major, intake }) => (
<div className="volunteer-preview" key={email} >
  <div className="volunteer-block" background-color="white">
    
    <span className="box1">
      <a href={"/${email}"}>
        <img
          src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          alt="profile pic"
          width="90"
          height="90"
          className="image"
        />
      </a>
    </span>
    <div className="volunteer-info">
    <div className="box2">
        <h2>{fullName}</h2>
        <p>{major} {intake}</p>
      <a href={"/${email}"}>
        <div className="seemore">
          <div className="rotate">See more</div>
        </div>
      </a>
    </div>
    </div>

  </div>
</div>
      ))}

    </ul>
  );
}

export default VolunteerList;