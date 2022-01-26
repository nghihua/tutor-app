import { Link, useLocation, useNavigate } from "react-router-dom";
import { PromptModal } from "components";
import { toast } from "react-toastify";

const ModalManager = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePromptClosed = () => {
    navigate(location, {
      replace: true,
      state: { ...location.state, showPromptModal: false },
    });

    toast.info(
      <>
        Your profile can always be edited later at{" "}
        <Link to="/profile" state={{ isEditing: true }}>
          /profile
        </Link>
        .
      </>,
      { autoClose: 10000 }
    );
  };

  if (location.state?.showPromptModal) {
    return <PromptModal onClosed={handlePromptClosed} />;
  }

  return null;
};

export { ModalManager };
