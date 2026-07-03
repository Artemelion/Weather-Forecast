import { appState } from "../state/state.js";

export function applyTheme() {
  const root = document.documentElement;

  if (appState.theme === "auto") {
    const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.setAttribute("data-theme", isDark ? "dark" : "light");
    return;
  }

  root.setAttribute("data-theme", appState.theme);
}

export function toggleTheme() {
  appState.theme = appState.theme === "auto"
    ? "light"
    : (appState.theme === "light" ? "dark" : "auto");

  applyTheme();
}
