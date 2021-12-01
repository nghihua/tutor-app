import './App.css';
import React, { Fragment } from "react";


//components
// import Profile from './components/Profile';
// import EditCalendar from './components/EditCalendar';
// import Volunteers from "./components/Volunteers";
// import Profile2 from "./components/Profile2";
// import LoginForm from './components/LoginForm';
import Register from './components/Register';

function App() {
  return (
    <Fragment>
      <div className="purple">
        {/* <Profile /> */}
        {/* <p>Edit Calendar</p>
        <EditCalendar /> */}
        {/* <p>Volunteers</p> */}
        {/* <Volunteers /> */}
        {/* <Profile2 /> */}
        <Register/>
        <br></br>
      </div>
    </Fragment>
  );
}
export default App;
