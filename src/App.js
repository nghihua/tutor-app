import {useState} from 'react';
import LoginForm from './LoginForm';
import Register from './Register';
import User from './User.js';

function App() {
  const adminUser = {
    email: "thodeptrai@gmail.com",
    password: "123456"
  }
  const [user, setUser] = useState({email: "", password: ""});
  const [error, setError] = useState("");
  const [state, setState] = useState(0);
  const [addUser, setaddUser] = useState({email: "", password: ""});

  const createUser = (details) => {
    setError("Create success");
    setaddUser(details);
  }
  const Login = (details) => {
    if((details.email === adminUser.email && details.password === adminUser.password) || (details.email === addUser.email && details.password === addUser.password)){
      setUser(details);
      console.log("Hello " + details.email);
      setError("");
      changePage(2);
     }
    else{ 
      setError("No account found!!!")
    }
  };

  const changePage = (num) =>{
    setState(num);
  };
  const Page = (num) =>{
    if(num === 0){
      return(
      <LoginForm Login = {Login} error = {error} changePage = {changePage}/>
      )
    }
    else if(num === 1){
      return(
        <Register changePage = {changePage} createUser = {createUser}/>
      )
    }
    else if(num === 2){
      return(
        <User user = {user} changePage = {changePage}/>
      )
    }
  }
  

  return (
    <div className="App">     
      {Page(state)}
    </div>
  )
}

export default App;
