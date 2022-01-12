import { useState } from 'react'
import { Link } from 'react-router-dom'

// const Register = ({changePage, createUser}) => {
const Register = () => {
  const [details, setDetails] = useState({ email: "", password: "", full_name: "", major: "", intake: "" });
  const [checkPassword, setCheckPassword] = useState("");
  const [error, setError] = useState("");

  const sendData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  const handleSubmit = (event) => {
    if (details.email === "" || details.password === "" || details.full_name === "" || details.major === "" || details.intake === "" || checkPassword === "") {
      event.preventDefault();
      console.log(details);
      setError("Please insert all input");
    }
    else {
      if (!(checkPassword === details.password)) {
        event.preventDefault();
        // add user to the server
        setError("Password not the same");
      }
      else{
        event.preventDefault();
        console.log(details);
        sendData('http://localhost:5000/api/auth/signup', details)
          .then(data => {
            console.log("data sent")
            console.log(data);
          })
          .catch(error => console.log(`error: ${error}`));
      }
    }
  }
  //[POST] /api/auth/signup ({ email, password, full_name, major, intake }) //is_volunteer is defaulted to false
  return (
    <div>
      <div className='register'>
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <input type="text" placeholder="Full Name" id="fullname" onChange={(event) => setDetails({ ...details, full_name: event.target.value })} value={details.value}></input>

          <input type="text" placeholder="Major" id="major" onChange={(event) => setDetails({ ...details, major: event.target.value })} value={details.value}></input>

          <input type="text" placeholder="Intake" id="intake" onChange={(event) => setDetails({ ...details, intake: event.target.value })} value={details.value}></input>

          <input type="email" placeholder="Email" id="email" onChange={(event) => setDetails({ ...details, email: event.target.value })} value={details.value}></input>

          <input type="password" placeholder="Password" id="password" onChange={(event) => setDetails({ ...details, password: event.target.value })} value={details.value}></input>

          <input type="password" placeholder="Repeat password" id="repeatpassword" onChange={(event) => setCheckPassword(event.target.value)} value={checkPassword.value}></input>


          {(error !== "") ? (<div className="error"><h2> {error} </h2></div>) : ""}

          <div className='center'>
            <button type="submit">Submit</button>
            {/* <button type ="submit" onClick = {returnLogin}>Return</button> */}
            <div className="tologin">
            <Link to="/" >Return to Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;