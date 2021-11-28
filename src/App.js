import './App.css';
import React, { Fragment } from "react";

//components
import Profile from './components/Profile';
import EditCalendar from './components/EditCalendar';
import Volunteers from "./components/Volunteers";
import Profile2 from "./components/Profile2";

function App() {
  return (
    <Fragment>
      <div className="container">
        <p>Profile</p>
        <Profile />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <p>Edit Calendar</p>
        <EditCalendar />
        {/* <Volunteers /> */}
        {/* <Profile2 /> */}
      </div>

    </Fragment>
  );
}
export default App;
