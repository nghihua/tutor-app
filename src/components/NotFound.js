import { Link, useNavigate } from 'react-router-dom'
const NotFound = () => {
  return ( 
    <div className="notfound">
      <h2>Not found the page 404</h2>
      <Link to="/">Please go back to the homepage</Link>
    </div>
   );
}
 
export default NotFound;