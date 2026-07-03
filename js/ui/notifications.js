import { TOAST_TIMEOUT_MS } from "../utils/constants.js";

let toastTimer = null;

export function showToast(text) {
  const toast = $("#toast");

  toast.text(text).addClass("open");
  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.removeClass("open");
  }, TOAST_TIMEOUT_MS);
}
