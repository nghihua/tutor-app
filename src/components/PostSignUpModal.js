import { Modal } from "bootstrap";
import { useEffect, useRef } from "react";
import { useAuth } from "../hooks/custom-hooks";
import ProfileEdit from "./ProfileEdit";

const PostSignUpModal = ({ onClose }) => {
  const auth = useAuth();
  const modalRef = useRef();
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    modalRef.current.addEventListener("hidden.bs.modal", () => {
      onCloseRef.current?.();
    });

    const modal = new Modal(modalRef.current);
    modal.show();
  }, []);

  const closeModal = () => {
    Modal.getInstance(modalRef.current).hide();
  };

  const handleSaveError = (err) => {
    console.error(err);
    alert("Unable to save. An error has occurred.");
  };

  return (
    <div className="modal fade" id="postSignUpModal" ref={modalRef}>
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="postSignUpModalLabel">
              Do you want to be a volunteer?
            </h5>
          </div>

          <div className="modal-body">
            <ProfileEdit
              user={auth.user}
              checkIsTutor
              onSaveSuccess={closeModal}
              onSaveError={handleSaveError}
              onCancel={closeModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSignUpModal;
