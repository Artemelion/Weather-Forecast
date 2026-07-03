import { API_ENDPOINTS, FORECAST_FIELDS } from "../utils/constants.js";

function qs(params) {
  const searchParams = [];

  Object.keys(params).forEach((key) => {
    if (params[key] === undefined || params[key] === null) return;
    searchParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
  });

  return searchParams.join("&");
}

export function geoSearch(name, lang) {
  const url = `${API_ENDPOINTS.geocode}?${qs({
    name,
    count: 7,
    language: lang || "en",
    format: "json",
  })}`;

  return $.getJSON(url).then((response) => {
    return response && response.results ? response.results : [];
  });
}

export function forecast(lat, lon, options = {}) {
  const url = `${API_ENDPOINTS.forecast}?${qs({
    latitude: lat,
    longitude: lon,
    timezone: "auto",
    current: FORECAST_FIELDS.current.join(","),
    hourly: FORECAST_FIELDS.hourly.join(","),
    daily: FORECAST_FIELDS.daily.join(","),
    temperature_unit: options.tempUnit === "f" ? "fahrenheit" : "celsius",
    wind_speed_unit: options.windUnit === "ms" ? "ms" : "kmh",
    precipitation_unit: "mm",
  })}`;

  return $.getJSON(url);
}
