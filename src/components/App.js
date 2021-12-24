import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './Navbar'
import LoginForm from './LoginForm';
import Register from './Register';
import Volunteers from './Volunteers';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <ProtectedRoute exact path="/volunteer" component={Volunteers} />
          <ProtectedRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;