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
        <form onSubmit={submitHandle}>
          <h2>Login</h2>
          {/* {(error) ? (<div className= "error"><h2>{error} </h2></div>) : ""} */}

          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" onChange={(event) => setDetails({ ...details, email: event.target.value })} value={details.email} />

          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" onChange={(event) => setDetails({ ...details, password: event.target.value })} value={details.password} />


          <div className='center'>
            <button type="submit" value="submit">Submit</button>
          </div>
        </form>
        <div className='center'>
          <Link to="/register">Register</Link>
        </div>
      </div>
      <footer>
        <p className="center">@tutor2021</p>
      </footer>
    </div>
  );
}

export default LoginForm;