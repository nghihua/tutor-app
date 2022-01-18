import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Volunteers from "./Volunteers";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import NotFound from "./NotFound";
import ProfileMe from "./ProfileMe";
import AuthProvider from "./AuthProvider";
import Navbar from "./Navbar";
import PostSignUpModal from "./PostSignUpModal";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
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

        {location.state?.postSignUpModal && (
          <PostSignUpModal
            onClose={() => {
              navigate(location, {
                replace: true,
                state: { ...location.state, postSignUpModal: false },
              });
              alert("Your profile can always be edited later at /profile.");
              // tạm alert. sẽ đổi thành toast notification sau
            }}
          />
        )}
      </AuthProvider>
    </div>
  );
};

export default App;
