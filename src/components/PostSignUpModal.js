import { Modal } from "bootstrap";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../hooks/custom-hooks";
import ProfileEdit from "./ProfileEdit";

const PostSignUpModal = ({ onClose }) => {
  const auth = useAuth();
  const modalRef = useRef();
  const [isEditing, setIsEditing] = useState(false);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // setup and show modal
  useEffect(() => {
    modalRef.current.addEventListener("hidden.bs.modal", () => {
      onCloseRef.current?.();
    });

    const modal = new Modal(modalRef.current);
    modal.show();
  }, []);

  // profile edit callbacks
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
              {isEditing
                ? "Please fill in your tutor information"
                : "Do you want to be a volunteer?"}
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              {/* Cái button này ở trên góc phải cũng để close.
              Có gì Phú hoặc ai chỉnh css lại giùm t thành dấu 'x' này nọ nha.
              Thanks */}
            </button>
          </div>

          <div className="modal-body">
            {isEditing ? (
              <ProfileEdit
                user={auth.user}
                checkIsTutor
                onSaveSuccess={closeModal}
                onSaveError={handleSaveError}
                onCancel={closeModal}
              />
            ) : (
              <>
                <button type="button" onClick={() => setIsEditing(true)}>
                  Yes
                </button>
                <button type="button" data-bs-dismiss="modal">
                  No
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSignUpModal;
