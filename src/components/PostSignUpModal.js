import { useEffect, useRef } from "react";
import { useAuth } from "../hooks/custom-hooks";
import ProfileEdit from "./ProfileEdit";

const PostSignupModal = () => {
  const auth = useAuth();
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current.click();
  }, []);

  return (
    <>
      <button
        type="button"
        ref={btnRef}
        className="btn btn-primary invisible"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Do you want to be a volunteer?
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Do you want to be a volunteer?
              </h5>
            </div>
            <div className="modal-body">
              <ProfileEdit user={auth.user} onCancel={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostSignupModal;
