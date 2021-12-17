import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// const Register = ({changePage, createUser}) => {
const Register = () => {
  const [details, setDetails] = useState({ name: "", username: "", email: "", password: "", repeatPassword: "" });
  const [error, setError] = useState("");

  const history = useHistory() // This will automatically push to the specific site
  const handleSubmit = (event) => {
    if (details.name === "" || details.username === "" || details.email === "" || details.password === "" || details.repeatPassword === "") {
      event.preventDefault();
      console.log(details);
      setError("Please insert all input");
    }
    else {
      event.preventDefault();
      // add user to the server
      console.log(details);
      history.push('/');
    }
  }

  return (
    <div>
      <div className='register'>
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>

          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={(event) => setDetails({ ...details, name: event.target.value })} value={details.value}></input>

          <label htmlFor="email">Email: </label>
          <input type="email" id="email" onChange={(event) => setDetails({ ...details, email: event.target.value })} value={details.value}></input>

          <label htmlFor="major">Major: </label>
          <input type="major" id="major" onChange={(event) => setDetails({ ...details, email: event.target.value })} value={details.value}></input>

          <label htmlFor="intake">Intake: </label>
          <input type="intake" id="intake" onChange={(event) => setDetails({ ...details, email: event.target.value })} value={details.value}></input>

          <label htmlFor="password">Password: </label>
          <input type="password" id="password" onChange={(event) => setDetails({ ...details, password: event.target.value })} value={details.value}></input>

          <label htmlFor="repeatpassword">Repeat Password:</label>
          <input type="password" id="repeatpassword" onChange={(event) => setDetails({ ...details, repeatPassword: event.target.value })} value={details.value}></input>

          {(error !== "") ? (<div className="error"><h2> {error} </h2></div>) : ""}

          <div className='center'>
            <button type="submit">Submit</button>
          </div>
          <div className='center'>
            {/* <button type ="submit" onClick = {returnLogin}>Return</button> */}
            <Link to="/" >Return to Login</Link>
          </div>
        </form>
      </div>
      <footer>
        <p className="center">@tutor2021</p>
      </footer>
    </div>
  );
}

export default Register;