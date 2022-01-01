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

          <input type="text" placeholder="Full name" id="name" onChange={(event) => setDetails({ ...details, name: event.target.value })} value={details.value}></input>

          <input type="email" placeholder="Email" id="email" onChange={(event) => setDetails({ ...details, email: event.target.value })} value={details.value}></input>

          <input type="major" placeholder="Major" id="major" onChange={(event) => setDetails({ ...details, email: event.target.value })} value={details.value}></input>

          <input type="intake" placeholder="Intake" id="intake" onChange={(event) => setDetails({ ...details, email: event.target.value })} value={details.value}></input>

          <input type="password" placeholder="Password" id="password" onChange={(event) => setDetails({ ...details, password: event.target.value })} value={details.value}></input>

          <input type="password" placeholder="Repeat password" id="repeatpassword" onChange={(event) => setDetails({ ...details, repeatPassword: event.target.value })} value={details.value}></input>

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
    </div>
  );
}

export default Register;