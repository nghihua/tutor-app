import { Link } from 'react-router-dom'

const Home = () => {
  return (
<div className="home">
    
  <header>
    <h1>TUTOR HOMEPAGE</h1>
  </header>
    
  <div className="Welcome">
    <h2>Welcome to Tutor</h2>
    <Link to="/login">
      <button>Sign in</button>
    </Link>
    <Link to="/register">
      <button>Sign up</button>
    </Link>
  </div>
    
  <div className="About-us">
    <h3>Who are we?</h3>
    <h2>ABOUT US</h2>
  </div>
    
  <div className="Privilege">
  </div>
    
  <div className="Subject">
    <h2>SUBJECT</h2>
  </div>
    
  <div className="Quote">
    <img alt="image" src="homeimg2.png" />
    <p>Tell me and I forget, teach me and I may remember, involve me and I learn</p>
    <h4>Benjamin Franklin</h4>
  </div>
</div>
  );
}

export default Home;