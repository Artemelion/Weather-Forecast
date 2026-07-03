import { STORE_KEYS } from "../utils/constants.js";
import { appState, updatePlace } from "../state/state.js";

export function readSettings() {
  try {
    const raw = localStorage.getItem(STORE_KEYS.settings);
    if (!raw) return;

    const settings = JSON.parse(raw);

    if (settings.lang) appState.lang = settings.lang;
    if (settings.theme) appState.theme = settings.theme;
    if (settings.tempUnit) appState.tempUnit = settings.tempUnit;
    if (settings.windUnit) appState.windUnit = settings.windUnit;
  } catch (error) {}
}

export function saveSettings() {
  const settings = {
    lang: appState.lang,
    theme: appState.theme,
    tempUnit: appState.tempUnit,
    windUnit: appState.windUnit,
  };

  try {
    localStorage.setItem(STORE_KEYS.settings, JSON.stringify(settings));
  } catch (error) {}
}

export function readLastPlace() {
  try {
    const raw = localStorage.getItem(STORE_KEYS.lastPlace);
    if (!raw) return;

    const place = JSON.parse(raw);
    if (!place || place.latitude == null || place.longitude == null) return;

    updatePlace(place);
  } catch (error) {}
}

export function saveLastPlace() {
  try {
    localStorage.setItem(STORE_KEYS.lastPlace, JSON.stringify(appState.place));
  } catch (error) {}
}
