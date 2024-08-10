import { ToastOptions } from "react-toastify";

export const truncateString = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + "...";
  }
};

export const goBackToRecentHistory = () => {
  window.history.back();
};

export const TOKEN = localStorage.getItem("accessToken")
  ? localStorage.getItem("accessToken")
  : null;

export const toastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

export const domain = () => {
  const origin = window.location.origin;
  // console.log(origin);
  return origin;
};
