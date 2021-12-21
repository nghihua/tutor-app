import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './Menu'
import LoginForm from './LoginForm';
import Register from './Register';
import Profile from './Profile';
import Volunteers from './Volunteers';
import Profile2 from './Profile2';
import ProtectedRoute from './ProtectedRoute';
const App = () => {
  return (
    <Router>
      <Menu />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
            
          <Route path="/volunteer" element={<ProtectedRoute component={Volunteers} />} />
          {/* <ProtectedRoute path="/profile" component={Profile2} />
          <ProtectedRoute path="/volunteer/profile" component={Profile} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;