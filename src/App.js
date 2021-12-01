import './App.css';
import React, { Fragment } from "react";


//components
// import Profile from './components/Profile';
// import EditCalendar from './components/EditCalendar';
// import Volunteers from "./components/Volunteers";
import Profile2 from "./components/Profile2";

function App() {
  return (
    <Fragment>
      <div className="purple">
        {/* <Profile /> */}
        {/* <p>Edit Calendar</p>
        <EditCalendar /> */}
        {/* <p>Volunteers</p> */}
        {/* <Volunteers /> */}
        <Profile2 />
        <br></br>
      </div>
    </Fragment>
  );
}
export default App;
