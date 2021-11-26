import './App.css';
import React, {Fragment} from "react";

//components
import EditProfile from './components/EditProfile';
import EditCalendar from './components/EditCalendar';

function App() {
  return (
  <Fragment>
    <div className="container">
      <p>Edit Profile</p>
      <EditProfile />
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
    </div>
    
  </Fragment>
  );
}
export default App;
