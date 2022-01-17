import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="buffer"></div>

      <div className="Welcome">
        <h2>Welcome to TUTOR</h2>
        <p>We are the answers to all your questions</p>
        <Link to="/login">
          <button>Sign in</button>
        </Link>
        <Link to="/register">
          <button>Sign up</button>
        </Link>
      </div>

      <div className="About-us">
        <div className="content">
          <h3>Who are we?</h3>
          <h2>ABOUT US</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatAmet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia consequat.Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat.Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequat.
          </p>
        </div>
        <div className="seperator"></div>
      </div>

      <div className="Privilege">
        <div className="box">
          <h4>Online Consulting</h4>
        </div>
        <div className="box">
          <h4>Choice Making</h4>
        </div>
        <div className="box">
          <h4>Progress Boosting</h4>
        </div>
      </div>

      <div className="Subject">
        <h3>What we teach</h3>
        <h2>SUBJECT</h2>
        <div className="row">
          <div className="subject-display">Mathematics</div>
          <div className="subject-display">Mathematics</div>
          <div className="subject-display">Mathematics</div>
        </div>
        <div className="row">
          <div className="subject-display">Mathematics</div>
          <div className="subject-display">Mathematics</div>
          <div className="subject-display">Mathematics</div>
        </div>
      </div>

      <div className="Quote">
        <img alt="image" src="homeimg2.png" />
        <p>
          Tell me and I forget, teach me and I may remember, involve me and I
          learn
        </p>
        <h4>Benjamin Franklin</h4>
      </div>
    </div>
  );
};

export default Home;
