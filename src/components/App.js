import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import LoginForm from './LoginForm';
import Register from './Register';
import Profile from './Profile';
import Volunteers from './Volunteers';
import Profile2 from './Profile2';
import ProtectedRoute from './ProtectedRoute';
import Footer from './Footer';
const App = () => {
  return (
    <div>
      <Router>
	  <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <ProtectedRoute exact path="/volunteer" component={Volunteers} />
          <ProtectedRoute exact path="/profile" component={Profile2} />
          <ProtectedRoute exact path="/t" component={Profile} />
        </Switch>
      </div>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;