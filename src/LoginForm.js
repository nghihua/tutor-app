import {useState} from 'react'

const LoginForm = ({Login, error, changePage}) => {
    const [details, setDetails] = useState({name :"", email: "", password: ""});

    const submitHandle = (event) => {
        event.preventDefault();
        Login(details);
        
    };
    const register = () =>{
        changePage(1);
    }
    
    return ( 
        <form onSubmit = {submitHandle}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !== "") ? (<div className= "error"><h2>{error} </h2></div>) : ""}
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name = "email" id= "email" onChange ={(event) => setDetails({...details, email: event.target.value})} value = {details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name = "password" id = "password" onChange = {(event) => setDetails({...details, password: event.target.value})} value = {details.password}/>            
                </div>
                   <div className="form-group">
                    <button type = "submit" value = "submit">Submit</button>
                </div>
                <div className="form-group">
                    <button type = "button" onClick ={register} value = "register">Register</button>
                </div>
            </div>
        </form>
    );
}
 
export default LoginForm;