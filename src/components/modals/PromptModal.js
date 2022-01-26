import { Modal } from "bootstrap";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "hooks/custom-hooks";
import ProfileEdit from "components/ProfileEdit";
import { ModalComponent } from "components";

// modal's content enum constants
const PROMPT = "PROMPT";
const EDIT = "EDIT";

const PromptModal = ({ onClosed }) => {
  const auth = useAuth();
  const modalRef = useRef();

  const [content, setContent] = useState(PROMPT);
  const switchingContentRef = useRef(false);

  const onClosedRef = useRef(onClosed);
  useEffect(() => {
    onClosedRef.current = onClosed;
  }, [onClosed]);

  // setup and show modal
  useEffect(() => {
    const modal = new Modal(modalRef.current);

    modalRef.current.addEventListener("hidden.bs.modal", () => {
      if (!switchingContentRef.current) {
        onClosedRef.current?.(); // raise close event
      } else {
        // switch content
        setContent(EDIT);
        modal.show();
        switchingContentRef.current = false; // disable switching content
      }
    });

    modal.show();
  }, []);

  // handle prompt agree
  const switchContent = () => {
    switchingContentRef.current = true; // enable switching content
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

  return <ModalComponent ref={modalRef} title={title} body={body} />;
};

export { PromptModal };
