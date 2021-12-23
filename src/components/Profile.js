import React, { Fragment } from "react";

const Profile = () => {

  return (
      <div className="container pt-3">
        <main className="mb-5">
          <h1 className="text-center pt-5">Volunteer's Profile</h1>
          <div className="text-center">
            <a href="/#">
              {/* add href to make console stop warning */}
              <img
                src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                alt="profile pic"
                width="90"
                height="90"
                className="image"
              />
            </a>
          </div>

          <h4 className="text-center font-weight-bold display-6 text-uppercase">Username</h4>
          <h4 className="text-center display-7 mb-5">Full name</h4>
          <div className="row justify-content-center">
            <p className="mr-5  font-weight-bold">Major</p>
            <p className="ml-5">Major</p>
          </div>
          <div className="row d-flex justify-content-center">
            <p className="mr-5 font-weight-bold">Subject</p>
            <p className="ml-5">Subject</p>
          </div>
        </main>
      </div>
  );
};

export default Profile;