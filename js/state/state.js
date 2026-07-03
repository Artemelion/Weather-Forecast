import { DEFAULT_DAYS_MODE, DEFAULT_PLACE } from "../utils/constants.js";

export const appState = {
  lang: null,
  theme: "auto",
  tempUnit: "c",
  windUnit: "kmh",
  daysMode: DEFAULT_DAYS_MODE,
  place: { ...DEFAULT_PLACE },
  geocodeTimer: null,
  clockTimer: null,
  lastData: null,
};

export function updatePlace(place) {
  appState.place = { ...place };
}

export function updateLastData(data) {
  appState.lastData = data;
}
