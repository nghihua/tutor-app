import { forwardRef } from "react";

const ModalComponent = forwardRef(({ title, body }, ref) => {
  return (
    <div className="modal fade" ref={ref}>
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>

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
});

export { ModalComponent };
