import { useLocation, useNavigate } from "react-router-dom";
import { PromptModal } from "components";

const ModalManager = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePromptClosed = () => {
    navigate(location, {
      replace: true,
      state: { ...location.state, showPromptModal: false },
    });
    alert("Your profile can always be edited later at /profile.");
    // tạm alert. sẽ đổi thành toast notification sau
  };

  if (location.state?.showPromptModal) {
    return <PromptModal onClosed={handlePromptClosed} />;
  }

  return null;
};

export { ModalManager };
