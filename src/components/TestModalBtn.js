import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const TestModalBtn = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const testModal = () => {
    navigate(location, {
      replace: true,
      state: { ...location.state, postSignUpModal: true },
    });

    // Code để cho vô Register.js, chạy khi sign up thành công:
    // navigate("/", { replace: true, state: { postSignUpModal: true } });
  };

  return (
    auth.isLoggedIn && (
      <button type="button" className="ml-5" onClick={testModal}>
        Test Modal (tạm để test, del sau)
      </button>
    )
  );
};

export default TestModalBtn;
