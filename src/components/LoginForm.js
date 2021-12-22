import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
const LoginForm = () => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  // const [error, setError] = useState(false) // set something if login not correct

  const history = useHistory();
  const submitHandle = (event) => {
    // Login(details);
    // fetch data to the server ???
    // check if success then
    history.push("/volunteer");
    //else => error
  };
  
  return (
    <div>
      <div className='login'>
		<div className="leftcolumn">
			<form onSubmit={submitHandle}>
			  <h2>Welcome !</h2>
			  {/* {(error) ? (<div className= "error"><h2>{error} </h2></div>) : ""} */}

			  <input type="email" placeholder="Email" name="email" id="email" onChange={(event) => setDetails({ ...details, email: event.target.value })} value={details.email} />

			  <input type="password" placeholder="Password" name="password" id="password" onChange={(event) => setDetails({ ...details, password: event.target.value })} value={details.password} />

			  <button type="submit" value="submit">Submit</button>
			  <div className="toregister">
			  <Link to="/register">Register here</Link>
			  </div>
			</form>
		</div>
		<div className="rightcolumn">
		{/*<img src={image.default} alt="image not found" />*/}
		</div>
      </div>
    </div>
  );
}

export default LoginForm;