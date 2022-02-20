import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Footer,
  Login,
  Register,
  Tutors,
  Profile,
  ProtectedRoute,
  Home,
  NotFound,
  ProfileMe,
  Navbar,
  ModalManager,
} from "components";

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
            <Route path="/tutors" element={<Tutors />} />
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
      <ToastContainer newestOnTop={true}/>
    </div>
  );
};

export { App };
