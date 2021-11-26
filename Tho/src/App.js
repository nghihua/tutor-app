import {useState} from 'react';
import LoginForm from './LoginForm';
import Register from './Register';
function App() {
  const adminUser = {
    email: "thodeptrai@gmail.com",
    password: "123456"
  }
  const [user, setUser] = useState({name: "", email: "", password: "", state: 0});
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password){
    console.log("Hello " + details.name);
    setUser({name: details.name, email: details.email})
     }
    else{ 
      console.log("Fuck off !!!");
    }
  };

  // const Logout = () =>{
  //   setUser({name: "", email: ""})
  // };
  const createAccount = () =>{
    setUser({...user, state: 0});
  }
  const Num_register = () =>{
    setUser({...user, state: 1});
  }
  return (
    <div className="App">
      {/* {(user.state !== "") ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick = {Logout}>Log out</button>
        </div>
      ) : (
          <LoginForm Login = {Login} error = {error}/>
          )
      } */}
      {
        (user.state === 0) ?
        (<LoginForm Login = {Login} error = {error} Register = {Num_register}/>) :
        (<Register createAccount = {createAccount} />)
      }
    </div>
  )
}

export default App;
