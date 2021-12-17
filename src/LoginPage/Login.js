import {useState} from 'react';
import LoginForm from './LoginForm';
import Menu from './Navbar';
import Register from './Register';
import Volunteers from './Volunteers';

function Login() {
  const adminUser = {
    email: "thodeptrai@gmail.com",
    password: "123456"
  }
  // const [user, setUser] = useState({email: "", password: ""});
  const [error, setError] = useState("");
  const [state, setState] = useState(0);
  const [addUser, setaddUser] = useState({email: "", password: ""});

  const createUser = (details) => {
    setError("Create success");
    setaddUser(details);
  }
  const Login = (details) => {
    if((details.email === adminUser.email && details.password === adminUser.password) || (details.email === addUser.email && details.password === addUser.password)){
      // setUser(details);
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
      <div>
        <Menu />
        <LoginForm Login = {Login} error = {error} changePage = {changePage} className="purple"/>
      </div>
      )
    }
    else if(num === 1){
      return(
        <Register changePage = {changePage} createUser = {createUser}/>
      )
    }
    else if(num === 2){
      return(
        <div>
          <Menu />
          <Volunteers/>
        </div>
      )
    }
  }
  

  return (
    <div className="App">     
      {Page(state)}      
    </div>
  )
}

export default Login;
