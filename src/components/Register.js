import {useState} from 'react'

const Register = ({changePage, createUser}) => {
    const [details, setDetails] = useState({name :"", username: "", email: "", password: "", repeatPassword: ""});
    const [error, setError] = useState("");

    const handleSubmit = (event) =>{
        if(details.name === "" || details.username === "" || details.email === "" || details.password === "" || details.repeatPassword === ""){
                event.preventDefault();
                console.log(details)
                setError("Please insert all input");
            }
        else{
            event.preventDefault();  
            createUser(details);      
            changePage(0);
        }
    }

    const returnLogin = () =>{
        changePage(0);
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
                <input type = "password" id ="repeatpassword" onChange={(event) => setDetails({...details, repeatPassword: event.target.value}) } value = {details.value}></input>
            </div>
            {(error !== "") ? (<div className= "error"><h2> {error} </h2></div>) : ""}            
            
            <div className ="form-register">
                <button type ="submit">Submit</button>
            </div>
            <div className ="form-register">
                <button type ="submit" onClick = {returnLogin}>Return</button>
            </div>
        </form>
    </div>
    );
}
 
export default Register;