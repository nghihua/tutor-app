import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import Register from "./Register";
import Volunteers from "./Volunteers";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import NotFound from "./NotFound";
import ProfileMe from "./ProfileMe";
import AuthProvider from "./AuthProvider";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
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
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
