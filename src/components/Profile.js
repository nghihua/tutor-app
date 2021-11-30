import React, {Fragment} from "react";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Profile = () => {

    return (
    <Fragment>
        <Navbar bg="light" expand="lg" className="fixed-top">
            <Container fluid>
                <Navbar.Brand href="#" style={{color:"#7B61FF"}}>Tutor</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Nav className="justify-content-end" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Edit Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div className="container pt-3">
            <main class="mb-5">
                <h1 className="text-center pt-5">Volunteer's Profile</h1>
                <div className="text-center">
                    <a>
                        <img
                            src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                            alt="profile pic"
                            width="90"
                            height="90"
                            class="image"
                        />
                    </a>
                </div>
                
                <h4 className="text-center font-weight-bold display-6 text-uppercase">Username</h4>
                <h4 className="text-center display-7 mb-5">Full name</h4>
                <div class="row justify-content-center">
                        <p class="mr-5  font-weight-bold">Major</p>
                        <p class="ml-5">Major</p>
                </div>
                <div class="row d-flex justify-content-center">
                        <p class="mr-5 font-weight-bold">Subject</p>
                        <p class="ml-5">Subject</p>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="container">
                    <h1 className="text-center">CSS Calendar</h1>

                    <ul class="weekdays">
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                        <li>Sa</li>
                        <li>Su</li>
                        </ul>

                        <ul class="days">  
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li><span class="active">10</span></li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li>19</li>
                        <li>20</li>
                        <li>21</li>
                        <li>22</li>
                        <li>23</li>
                        <li>24</li>
                        <li>25</li>
                        <li>26</li>
                        <li>27</li>
                        <li>28</li>
                        <li>29</li>
                        <li>30</li>
                        <li>31</li>
                    </ul>
                </div>
            </main>
            <footer>
               <p class="d-flex justify-content-center footer footer1 font-weight-bold navbar-fixed-bottom ">@tutor2021</p> 
            </footer>
        </div>
  </Fragment>
    );
};

export default Profile;