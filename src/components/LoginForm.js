import {Fragment, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const LoginForm = ({Login, error, Register}) => {
    const [details, setDetails] = useState({name :"", email: "", password: ""});

    const submitHandle = (event) => {
        event.preventDefault();
        Login(details);
        
    };
    const register = () =>{
        Register();  
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
            <div className="container pt-3 mb-5">
                <form onSubmit = {submitHandle} class="container">
                    <h1 class="text-center pt-5 pb-5">Login</h1>

                    <div class="form-group row">
                        <label htmlFor="name" class="col col-form-label">Name:</label>
                        <div class="col-6">
                            <input type="text" name = "name" id ="name" class="form-control" onChange ={(event) => setDetails({...details, name: event.target.value})} value = {details.name}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" class="col col-form-label">Email: </label>
                        <div class="col-6">
                            <input type="email" class="form-control" name = "email" id= "email" onChange ={(event) => setDetails({...details, email: event.target.value})} value = {details.email} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" class="col col-form-label">Password: </label>
                        <div class="col-6">
                            <input type="password" class="form-control" name = "password" id = "password" onChange = {(event) => setDetails({...details, password: event.target.value})} value = {details.password}/>            
                        </div>
                    </div>

                    <div className="text-center pt-5">
                        <button type = "submit" value = "submit" class="btn btn-primary btn-lg">Login</button>
                    </div>
                </form>
            </div>
            <footer>
               <p class="d-flex justify-content-center footer footer1 font-weight-bold navbar-fixed-bottom ">@tutor2021</p> 
            </footer>
        </Fragment>
        
    );
}
 
export default LoginForm;