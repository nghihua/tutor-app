import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm';
import Register from './Register';
import Profile from './Profile';
import Volunteers from './Volunteers';
import Profile2 from './Profile2';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />

          <Route path="/volunteer" element={<ProtectedRoute component={Volunteers} />} />
          <Route path="/profile/edit" element={<ProtectedRoute component={Profile2} />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
          {/* <Route path="/volunteer/:id" element={<ProtectedRoute component={VolunteerProfile} />} /> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;