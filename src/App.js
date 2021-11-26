import './App.css';
import React, {Fragment} from "react";

//components
import Profile from './components/Profile';
import EditCalendar from './components/EditCalendar';

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
    </div>
    
  </Fragment>
  );
}
export default App;
