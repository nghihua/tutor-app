import { toast } from "react-toastify";

export const includeCredentials = { credentials: "include" };

const errMsgPrefix = /^\[HTTP \d\d\d\] ?/;
export const getFetchErrMsg = (error) => error.replace(errMsgPrefix, "");

// toast abortable promise
const resetParams = {
  isLoading: null,
  autoClose: null,
  closeOnClick: null,
  closeButton: null,
  draggable: null,
};

export const toastAbortablePromise = (promise, { pending, error, success }) => {
  const id = toast.loading(pending);

  promise
    .then(() => {
      toast.update(id, {
        ...resetParams,
        type: "success",
        render: success,
      });
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        toast.dismiss(id);
        return;
      }

      toast.update(id, {
        ...resetParams,
        type: "error",
        render: error,
      });
    });
};

export const notifyError = (error) => {
  console.error(error);
  toast.error("An error has occurred.");
};
