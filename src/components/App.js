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
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginForm />} />
            <Route element={<Navbar />}>
              <Route index element={<Home />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/volunteers" element={<Volunteers />} />
                <Route path="/profile">
                  <Route index element={<ProfileMe />} />
                  <Route path=":id" element={<Profile />} />
                </Route>
              </Route>

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>

          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
