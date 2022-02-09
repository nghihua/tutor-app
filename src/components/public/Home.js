import { Link } from "react-router-dom";
import { useAuth } from "hooks";

const Home = () => {
  const auth = useAuth();

  return (
    <div className="home">
      {/* <div className="buffer"></div> */}

      <div className="Welcome">
        <div className="content">
          <h2 className="container">WELCOME TO TUTOR</h2>
          <p className="container">We are the answers to all your questions</p>

          {auth.isLoggedIn === false && (
            <div className="row">
              <Link to="/login" class="col">
                <button>Sign in</button>
              </Link>
              <Link to="/register" class="col">
                <button>Sign up</button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="About-us">
        <div className="content">
          <h3>Who are we?</h3>
          <h2>ABOUT US</h2>
          <p className="container">
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
        <div className=" box">
          <img
            src="https://i.ibb.co/QMJbLtj/chat-symbol.png"
            alt="Consulting"
          />
          <h4>Online Consulting</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.
          </p>
        </div>
        <div className="box">
          <img src="https://i.ibb.co/hsCYbdb/people-symbol.png" alt="Choice" />
          <h4>Choice Making</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.
          </p>
        </div>
        <div className="box">
          <img
            src="https://i.ibb.co/cNKTPZN/progress-symbol.png"
            alt="Progress"
          />
          <h4>Progress Boosting</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.
          </p>
        </div>
      </div>

      <div className="Subject">
        <h3>What we teach</h3>
        <h2>SUBJECT</h2>

        <div className="row">
          <div className="subject-display">
            <img src="home-math.png" />
            <h4>Mathematics</h4>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </div>
          <div className="subject-display">
            <img src="home-physics.png" />
            <h4>Physics</h4>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.
          </div>
          <div className="subject-display">
            <img src="home-english.png" />
            <h4>English</h4>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </div>
          <div className="subject-display">
            <img src="home-matlab.png" />
            <h4>Matlab</h4>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </div>
          <div className="subject-display">
            <img src="home-unix.png" />
            <h4>Unix/ Linux</h4>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </div>
          <div className="subject-display">
            <img src="home-german.png" />
            <h4>German</h4>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </div>
        </div>

        {/* <div className="row">
          
        </div> */}
      </div>

      <div className="Quote text-center">
        <img alt="image" src="homeimg2.png" />
        <p className=" text-center">Tell me and I forget, teach me and I may remember, involve me and I learn</p>
        <h4>Benjamin Franklin</h4>
      </div>
    </div>
  );
};

export { Home };
