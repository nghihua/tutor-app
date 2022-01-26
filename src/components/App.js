import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Footer,
  Login,
  Register,
  Volunteers,
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

      <ModalManager />
      <ToastContainer />
    </div>
  );
};

export { App };
