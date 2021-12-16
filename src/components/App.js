import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Menu from './Navbar'
import LoginForm from './LoginForm';
import Register from './Register';
import Profile from './Profile';
import Volunteers from './Volunteers';
import Profile2 from './Profile2';
const App = () => {
    return ( 
        <Router>
            <div className="App">
                <Menu />
            <Switch>
                <Route exact path="/">
                    <LoginForm />
                </Route>
                {/* <Route path="/home">
                    <LoginForm />
                </Route> */}
                <Route path="/register">
                    <Register />
                </Route>
                <Route exact path="/volunteer">
                    <Volunteers />
                </Route>
                <Route path="/profile">
                    <Profile2 />
                </Route>
                <Route path="/volunteer/profile">
                    <Profile />
                </Route>
            </Switch>
            </div>
        </Router>
     );
}
 
export default App;