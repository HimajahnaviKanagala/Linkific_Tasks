import { toast } from "react-toastify";

export const showSuccess = (msg) =>
  toast.success(msg, {
    toastId: "success-toast",
    position: "top-right",
    autoClose: 2500,
    theme: "colored",
  });

export const showError = (msg) =>
  toast.error(msg, {
    toastId: "error-taost",
    position: "top-right",
    autoClose: 4000,
    theme: "colored",
  });

export const showInfo = (msg) =>
  toast.info(msg, {
    toastId: "info-toast",
    position: "bottom-right",
    autoClose: 2000,
  });
