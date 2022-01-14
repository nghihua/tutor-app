import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h2>This is a Home Page</h2>
      <Link to="/volunteers">Go to Logasdasdin</Link>
      <p> </p>
    </div>
  );
}

export default Home;