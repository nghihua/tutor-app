import { Modal } from "bootstrap";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../hooks/custom-hooks";
import ProfileEdit from "./ProfileEdit";

// modal's content enum constants
const PROMPT = "PROMPT";
const EDIT = "EDIT";

const VolunteerPromptModal = ({ onClose }) => {
  const auth = useAuth();
  const modalRef = useRef();

  const [content, setContent] = useState(PROMPT);
  const isSwitchingContentRef = useRef(false);

  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // setup and show modal
  useEffect(() => {
    const modal = new Modal(modalRef.current);

    modalRef.current.addEventListener("hidden.bs.modal", () => {
      if (!isSwitchingContentRef.current) {
        onCloseRef.current?.(); // raise close event
      } else {
        // switch content
        setContent(EDIT);
        modal.show();
        isSwitchingContentRef.current = false; // disable switching content
      }
    });

    modal.show();
  }, []);

  // handle prompt agree
  const switchContent = () => {
    isSwitchingContentRef.current = true; // enable switching content
    closeModal(); // the remaining actions are in the hidden.bs.modal event handler
  };

  // profile edit callbacks
  const closeModal = () => {
    const modal = Modal.getInstance(modalRef.current);
    modal.hide();
  };

  const handleSaveSuccess = () => {
    alert("Saved successfully!");
    closeModal();
  };

  const handleSaveError = (err) => {
    console.error(err);
    alert("Unable to save. An error has occurred.");
  };

  // modal's content
  const { title, body } = {
    [PROMPT]: {
      title: "Do you want to be a volunteer?",
      body: (
        <>
          <button type="button" onClick={switchContent}>
            Yes
          </button>
          <button type="button" data-bs-dismiss="modal">
            No
          </button>
        </>
      ),
    },
    [EDIT]: {
      title: "Please fill in your tutor information",
      body: (
        <ProfileEdit
          user={auth.user}
          checkIsTutor
          onSaveSuccess={handleSaveSuccess}
          onSaveError={handleSaveError}
          onCancel={closeModal}
        />
      ),
    },
  }[content];

  return (
    <div className="modal fade" id="volunteerPromptModal" ref={modalRef}>
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="volunteerPromptModalLabel">
              {title}
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPromptModal;
