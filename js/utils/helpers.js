import { DICTIONARY, WEATHER_CODES } from "./constants.js";
import { appState } from "../state/state.js";

export function browserLang() {
  const language = (navigator.language || "en").toLowerCase();

  if (language.indexOf("uk") === 0) return "ua";
  if (language.indexOf("ru") === 0) return "ru";

  return "en";
}

export function localeName() {
  if (appState.lang === "ua") return "uk-UA";
  if (appState.lang === "ru") return "ru-RU";

  return "en-US";
}

export function tr(key) {
  const dictionary = DICTIONARY[appState.lang] || DICTIONARY.en;

  const value = key.split(".").reduce((current, part) => {
    return current ? current[part] : undefined;
  }, dictionary);

  return value === undefined ? key : value;
}

export function tempUnitLabel() {
  return appState.tempUnit === "f" ? "°F" : "°C";
}

export function windUnitLabel() {
  return appState.windUnit === "ms" ? "m/s" : "km/h";
}

export function windDir(deg) {
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(((deg % 360) / 45)) % 8;

  return dirs[index];
}

export function wmo(code) {
  if (code === 0) return { icon: "☀️", text: "cond.clear" };
  if (code === 1) return { icon: "🌤️", text: "cond.mainlyClear" };
  if (code === 2) return { icon: "⛅", text: "cond.partlyCloudy" };
  if (code === 3) return { icon: "☁️", text: "cond.overcast" };
  if (code === 45 || code === 48) return { icon: "🌫️", text: "cond.fog" };
  if (WEATHER_CODES.drizzle.includes(code)) return { icon: "🌦️", text: "cond.drizzle" };
  if (WEATHER_CODES.rain.includes(code)) return { icon: "🌧️", text: "cond.rain" };
  if (WEATHER_CODES.snow.includes(code)) return { icon: "🌨️", text: "cond.snow" };
  if (WEATHER_CODES.thunder.includes(code)) return { icon: "⛈️", text: "cond.thunder" };

  return { icon: "⛅", text: "cond.partlyCloudy" };
}

export function hhmm(iso) {
  if (!iso || iso.length < 16) return "—";

  return iso.slice(11, 16);
}

export function weekdayShort(dateIso) {
  if (!dateIso || dateIso.length < 10) return "—";

  const date = new Date(`${dateIso.slice(0, 10)}T12:00:00Z`);

  return new Intl.DateTimeFormat(localeName(), {
    weekday: "short",
    timeZone: "UTC",
  }).format(date);
}

export function fmtNowClock() {
  try {
    return new Intl.DateTimeFormat(localeName(), {
      dateStyle: "medium",
      timeStyle: "medium",
    }).format(new Date());
  } catch (error) {
    return new Date().toLocaleString();
  }
}

export function findStartIndex(times, nowIso) {
  if (!times || !times.length) return 0;

  if (nowIso) {
    for (let i = 0; i < times.length; i += 1) {
      if (times[i] >= nowIso) return i;
    }
  }

  return 0;
}

export function getCurrentHourlyIndex(data) {
  if (!data.hourly || !data.hourly.time || !data.current || !data.current.time) {
    return 0;
  }

  return Math.max(0, data.hourly.time.indexOf(data.current.time));
}
