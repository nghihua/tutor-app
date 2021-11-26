import React, {Fragment} from "react";

const Profile = () => {

    return (
    <Fragment>
        <div className="container">
            <h1 className="text-center">Volunteer's Profile</h1>
            <image src={process.env.PUBLIC_URL + "../images/image(2068).png"}  alt="Avatar" style={{display: "block", height: "200px", width: "200px", visibility: "visible"}}></image>
            <h4 className="text-center">Username</h4>
            <h4 className="text-center">Full name</h4>
            <form>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Major</label>
                    <div class="col-sm-10">
                        <input type="text" disabled class="form-control form-control-lg"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Subject</label>
                    <div class="col-sm-10">
                        <input type="text" disabled class="form-control form-control-lg"></input>
                    </div>
                </div>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
                <h1 className="text-center">CSS Calendar</h1>

                <div class="month">      
                    <ul>
                        <li class="prev">&#10094;</li>
                        <li class="next">&#10095;</li>
                        <li>
                        August<br></br>
                        <span>2021</span>
                        </li>
                    </ul>
                </div>

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
        </div>
  </Fragment>
    );
};

export default Profile;