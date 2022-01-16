import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import Register from "./Register";
import Volunteers from "./Volunteers";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import ProfileMe from "./ProfileMe";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes className="content-wrap">
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/volunteers"
            element={<ProtectedRoute component={Volunteers} />}
          />
          <Route path="/profile">
            <Route index element={<ProtectedRoute component={ProfileMe} />} />
            <Route
              path=":id"
              element={<ProtectedRoute component={Profile} />}
            />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
