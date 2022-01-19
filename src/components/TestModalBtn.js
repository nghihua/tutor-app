import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const TestModalBtn = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const testModal = () => {
    navigate(location, {
      replace: true,
      state: { ...location.state, showPromptModal: true },
    });

    // Code để cho vô Register.js, chạy khi sign up thành công:
    // navigate("/", { replace: true, state: { showPromptModal: true } });
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
