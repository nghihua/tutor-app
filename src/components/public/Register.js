import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

// const Register = ({changePage, createUser}) => {
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFull_name] = useState("");
  const [major, setMajor] = useState("");
  const [intake, setIntake] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const toastId = useRef(null);
  const sendData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const message = await response.json()
    if (!response.ok) {
      throw new Error(message.message);
    }
    else {
      return message;
    }
  };

  const handleSubmit = (event) => {
    toast.dismiss(toastId.current);
    event.preventDefault();
    const details = {
      email,
      password,
      full_name,
      major,
      intake,
    };
    if (!(checkPassword === password)) {
      toast.dismiss(toastId.current);
      toastId.current = toast.error("Password are not the same");
    } else {
      sendData("http://localhost:5000/api/auth/signup", details)
        .then((data) => {
          navigate("/login", { replace: true });
          toastId.current = toast.success(data.message);
        })
        .catch((error) => {
          toastId.current = toast.error(error.message);
        }
        );
    }
  
  };
  //[POST] /api/auth/signup ({ email, password, full_name, major, intake }) //is_tutor is defaulted to false
  return (
    <div>
      <div className="register">
        <form onSubmit={handleSubmit} className="container">
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Full Name"
            id="fullname"
            onChange={(event) => setFull_name(event.target.value)}
            required
          ></input>

          {/* <input type="text" placeholder="Major" id="major" onChange={(event) => setDetails({ ...details, major: event.target.value })} ></input> */}
          <select
            id="major"
            onChange={(event) => setMajor(event.target.value)}
            value={major}
            required
          >
            <option disabled selected="true" value="">
              -- Please select major --{" "}
            </option>
            <option value="CSE">CSE</option>
            <option value="BBA">BBA</option>
            <option value="BFA">BFA</option>
            <option value="ARC">ARC</option>
            <option value="BCE">BCE</option>
            <option value="MEN">MEN</option>
            <option value="ECE">ECE</option>
          </select>
          <input
            type="number"
            placeholder="Intake"
            id="intake"
            onChange={(event) => setIntake(event.target.value)}
            required
            step="1"
            min="2008"
            max={new Date().getFullYear()}
          ></input>

          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            required
          ></input>

          <input
            type="password"
            placeholder="Password"
            id="password"
            required
            onChange={(event) => setPassword(event.target.value)}
          ></input>

          <input
            type="password"
            placeholder="Repeat password"
            id="repeatpassword"
            onChange={(event) => setCheckPassword(event.target.value)}
          ></input>

          {error !== "" ? (
            <div className="error">
              <h2> {error} </h2>
            </div>
          ) : (
            ""
          )}

          <div className="center">
            <button type="submit">Submit</button>
            {/* <button type ="submit" onClick = {returnLogin}>Return</button> */}
            {/* <div className="tologin">
              <Link to="/login">Return to Login</Link>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export { Register };
