import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Footer';
import LoginForm from './LoginForm';
import Register from './Register';
import Volunteers from './Volunteers';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />

          <Route path="/volunteers" element={<ProtectedRoute component={Volunteers} />} />
          <Route path="/profile/:id" element={<ProtectedRoute component={Profile} />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;