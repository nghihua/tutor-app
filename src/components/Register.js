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
    <div className='register'>
		<form onSubmit={handleSubmit}>
		  <img
          src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          alt="profile pic"
          width="100"
          height="100"
          className="defaultavatar"
      />
		
		  <input type="text" placeholder="Full name" id="name" onChange={(event) => setDetails({ ...details, name: event.target.value })} value={details.value}></input>

		  <input type="email" placeholder="E-mail" id="email" onChange={(event) => setDetails({ ...details, email: event.target.value })} value={details.value}></input>
			  {/*
		  <input type="major" placeholder="Password" id="major" onChange={(event) => setDetails({ ...details, email: event.target.value })} value={details.value}></input>

		  <input type="intake" placeholder="Intake" id="intake" onChange={(event) => setDetails({ ...details, email: event.target.value })} value={details.value}></input>
			  */}
		  <input type="password" placeholder="Password" id="password" onChange={(event) => setDetails({ ...details, password: event.target.value })} value={details.value}></input>

		  <input type="password" placeholder="Confirm password" id="repeatpassword" onChange={(event) => setDetails({ ...details, repeatPassword: event.target.value })} value={details.value}></input>

		  {(error !== "") ? (<div className="error"><h2> {error} </h2></div>) : ""}

		  <button type="submit">Submit</button>
		  {/* <button type ="submit" onClick = {returnLogin}>Return</button> */}
		  <div className="reference">
		    <Link to="/" >Return to Login</Link>
		  </div>
		</form>
  </div>
  );
}

export default Register;