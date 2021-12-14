import {useState, Fragment} from 'react';

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
        <Fragment>
            <div className='login'>
                <form onSubmit = {submitHandle}>
                        <h2>Login</h2>
                        {(error !== "") ? (<div className= "error"><h2>{error} </h2></div>) : ""}

                        <label htmlFor="email">Email: </label>
                        <input type="email" name = "email" id= "email" onChange ={(event) => setDetails({...details, email: event.target.value})} value = {details.email} />
        
                        <label htmlFor="password">Password: </label>
                        <input type="password" name = "password" id = "password" onChange = {(event) => setDetails({...details, password: event.target.value})} value = {details.password}/>            

                        
                        <div className='center'>
                            <button type = "submit" value = "submit">Submit</button>
                        </div>
                        <div className='center'>
                            <button type = "button" onClick ={register} value = "register">Register</button>
                        </div>
                </form>
            </div>
        </Fragment>
    );
}
 
export default LoginForm;