import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [details, setDetails] = useState({email: "", password: "" });
  // const [error, setError] = useState(false) // set something if login not correct
  let navigate = useNavigate(); // navigate to the volunteer page

  const url = 'http://localhost:5000/api/auth/login';
  const postData = async (url, data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json();
  }
  const submitHandle = (event) => {
    postData(url, {details})
    .then(result => console.log(result))
    .catch(error => console.log(error))
    event.preventDefault();
    // navigate("/volunteer");
  };

  return (
    <div>
      <div className='login'>
        <div >
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
        <div >
          {/*<img src={image.default} alt="image not found" />*/}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;