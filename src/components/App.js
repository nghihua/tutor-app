import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Volunteers from "./Volunteers";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import NotFound from "./NotFound";
import ProfileMe from "./ProfileMe";
import Navbar from "./Navbar";
import { ModalManager } from "components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navbar link={"/login"} linkName={"Log In"} />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<Navbar link={"/register"} linkName={"Register"} />}>
          <Route path="/login" element={<Login />} />
        </Route>
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

      <ModalManager />
      <ToastContainer />
    </div>
  );
};

export default App;