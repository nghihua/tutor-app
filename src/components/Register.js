import {useState} from 'react'

const Register = ({createAccount}) => {
    const [details, setDetails] = useState({name :"", username: "", email: "", password: "", repeatPassword: ""});

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(details);
        createAccount();
    }
    return ( 
    <div className="register">
        <form onSubmit = {handleSubmit}>
            <h2>Register</h2>
            <div className ="form-register">
                <label htmlFor="name">Name: </label>
                <input type = "text" id ="name" onChange={(event) => setDetails({...details, name: event.target.value}) } value = {details.value}></input>
            </div>
            <div className ="form-register">
                <label htmlFor="username">Username: </label>
                <input type = "text" id ="username" onChange={(event) => setDetails({...details, username: event.target.value}) } value = {details.value}></input>
            </div>
            <div className ="form-register">
                <label htmlFor="email">Email: </label>
                <input type = "email" id ="email" onChange={(event) => setDetails({...details, email: event.target.value}) } value = {details.value}></input>
            </div>
            <div className ="form-register">
                <label htmlFor="password">Password: </label>
                <input type = "password" id ="password" onChange={(event) => setDetails({...details, password: event.target.value}) } value = {details.value}></input>
            </div>
            <div className ="form-register">
                <label htmlFor="repeatpassword">Repeat Password:</label>
                <input type = "password" id ="repeatpassword" onChange={(event) => setDetails({...details, repeatpassword: event.target.value}) } value = {details.value}></input>
            </div>
            <div className ="form-register">
                <button type ="submit">Submit</button>
            </div>
        </form>
    </div>
    );
}
 
export default Register;