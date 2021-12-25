import {Link} from 'react-router-dom'

const Home = () => {
  return ( 
    <div className="home">
      <h2>This is a Home Page</h2>
      <Link to="login">Go to Login</Link>
    </div>
   );
}
 
export default Home;