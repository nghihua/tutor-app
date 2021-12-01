import {Fragment, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Register = ({createAccount}) => {
    const [details, setDetails] = useState({name :"", username: "", email: "", password: "", repeatPassword: ""});

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(details);
        createAccount();
    }
    return ( 
    <Fragment>
        <Navbar bg="light" expand="lg" className="fixed-top">
            <Container fluid>
                <Navbar.Brand href="#" style={{color:"#7B61FF"}}>Tutor</Navbar.Brand>
                <Nav className="justify-content-end" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Edit Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div className="register container pt-3 mb-5">
            <form onSubmit = {handleSubmit} class="container">
                <h1 class="text-center pt-5 pb-5">Register</h1>

                <div className ="form-register form-group row">
                    <label htmlFor="name" class="col col-form-label">Name: </label>
                    <div class="col-6">
                        <input type = "text" id ="name" class="form-control" onChange={(event) => setDetails({...details, name: event.target.value}) } value = {details.value}></input>
                    </div>
                </div>

                <div className ="form-register form-group row">
                    <label htmlFor="username" class="col col-form-label">Username: </label>
                    <div class="col-6">
                        <input type = "text" id ="username" class="form-control" onChange={(event) => setDetails({...details, username: event.target.value}) } value = {details.value}></input>
                    </div>
                </div>

                <div className ="form-register form-group row">
                    <label htmlFor="email" class="col col-form-label">Email: </label>
                    <div class="col-6">
                        <input type = "email" id ="email" class="form-control" onChange={(event) => setDetails({...details, email: event.target.value}) } value = {details.value}></input>
                    </div>
                </div>

                <div className ="form-register form-group row">
                    <label htmlFor="password" class="col col-form-label">Password: </label>
                    <div class="col-6">
                        <input type = "password" id ="password" class="form-control" onChange={(event) => setDetails({...details, password: event.target.value}) } value = {details.value}></input>
                    </div>
                </div>

                <div className ="form-register form-group row">
                    <label htmlFor="repeatpassword" class="col col-form-label">Repeat Password:</label>
                    <div class="col-6">
                        <input type = "password" id ="repeatpassword" class="form-control" onChange={(event) => setDetails({...details, repeatpassword: event.target.value}) } value = {details.value}></input>
                    </div>
                </div>

                <div className ="form-register text-center pt-5">
                    <button type ="submit" class="btn btn-primary btn-lg">Register</button>
                </div>
            </form>
        </div>
        <footer>
            <p class="d-flex justify-content-center footer footer1 font-weight-bold navbar-fixed-bottom ">@tutor2021</p> 
        </footer>
    </Fragment>
    );
}
 
export default Register;