import { DEFAULT_PLACE, HOURLY_FORECAST_LIMIT } from "../utils/constants.js";
import { appState } from "../state/state.js";
import {
  findStartIndex,
  fmtNowClock,
  getCurrentHourlyIndex,
  hhmm,
  tempUnitLabel,
  tr,
  weekdayShort,
  windDir,
  windUnitLabel,
  wmo,
} from "../utils/helpers.js";
import { syncHourlyRange } from "./hourlySlider.js";
import { setWeatherEffect } from "./weatherEffects.js";
import { updateTempChart } from "./chart.js";

function startClock() {
  clearInterval(appState.clockTimer);
  $("#updatedAt").text(fmtNowClock());

  appState.clockTimer = setInterval(() => {
    $("#updatedAt").text(fmtNowClock());
  }, 1000);
}

function setDayNight(isDay) {
  $("#chipDayNight").text(isDay ? tr("misc.day") : tr("misc.night"));
}

function setCurrentPlaceTitle() {
  const title = appState.place.isGeo
    ? tr("misc.near")
    : (appState.place.name || DEFAULT_PLACE.name);

  $("#placeTitle").text(title);
}

function getHourlyValue(data, field, index) {
  return data.hourly && data.hourly[field]
    ? data.hourly[field][index]
    : null;
}

function renderCurrentStats(data) {
  const current = data.current;
  const hourlyIndex = getCurrentHourlyIndex(data);
  const clouds = current.cloud_cover != null
    ? current.cloud_cover
    : getHourlyValue(data, "cloud_cover", hourlyIndex);
  const visibility = current.visibility != null
    ? current.visibility
    : getHourlyValue(data, "visibility", hourlyIndex);
  const uv = current.uv_index != null
    ? current.uv_index
    : getHourlyValue(data, "uv_index", hourlyIndex);

  $("#statWind").text(`${Math.round(current.wind_speed_10m)} ${windUnitLabel()}`);
  $("#statWindDir").text(`${windDir(current.wind_direction_10m)} (${Math.round(current.wind_direction_10m)}°)`);
  $("#statHumidity").text(Math.round(current.relative_humidity_2m));
  $("#statPressure").text(Math.round(current.pressure_msl));
  $("#statClouds").text(clouds == null ? "—" : Math.round(clouds));
  $("#statVisibility").text(visibility == null ? "—" : (visibility / 1000).toFixed(1));
  $("#statUV").text(uv == null ? "—" : Number(uv).toFixed(1));
}

function renderSunInfo(daily) {
  if (daily && daily.sunrise && daily.sunrise[0]) {
    $("#statSunrise").text(hhmm(daily.sunrise[0]));
  }

  if (daily && daily.sunset && daily.sunset[0]) {
    $("#statSunset").text(hhmm(daily.sunset[0]));
  }
}

function createHourItem(hourly, index) {
  const info = wmo(hourly.weather_code[index]);
  const timeLabel = hhmm(hourly.time[index]);
  const rainChance = hourly.precipitation_probability && hourly.precipitation_probability[index] != null
    ? hourly.precipitation_probability[index]
    : 0;
  const wind = hourly.wind_speed_10m && hourly.wind_speed_10m[index] != null
    ? Math.round(hourly.wind_speed_10m[index])
    : 0;

  return $(
    '<div class="hour">'
      + `<div class="hour-t">${timeLabel}</div>`
      + `<div class="hour-temp">${Math.round(hourly.temperature_2m[index])}${tempUnitLabel()}</div>`
      + '<div class="hour-meta">'
        + `<div>${info.icon} ${tr(info.text)}</div>`
        + `<div>💧 ${rainChance}%</div>`
        + `<div>💨 ${wind} ${windUnitLabel()}</div>`
      + '</div>'
    + '</div>',
  );
}

function updateHourlyHint(times, startIndex, endIndex) {
  if (times[startIndex] && times[endIndex - 1]) {
    $("#hourlyHint").text(`${hhmm(times[startIndex])} – ${hhmm(times[endIndex - 1])}`);
    return;
  }

  $("#hourlyHint").text("—");
}

function getDailyBase(daily, index) {
  const info = wmo(daily.weather_code[index]);

  return {
    info,
    dayName: weekdayShort(daily.time[index]),
    maxTemp: Math.round(daily.temperature_2m_max[index]),
    minTemp: Math.round(daily.temperature_2m_min[index]),
  };
}

function createDailyCardTop(dayName, info) {
  return '<div class="day-top">'
    + '<div>'
      + `<div class="day-name">${dayName}</div>`
      + `<div class="day-muted">${tr(info.text)}</div>`
    + '</div>'
    + `<div class="day-icon" aria-hidden="true">${info.icon}</div>`
  + '</div>';
}

function createSevenDayCard(daily, index) {
  const base = getDailyBase(daily, index);
  const uv = daily.uv_index_max && daily.uv_index_max[index] != null
    ? daily.uv_index_max[index].toFixed(1)
    : "—";

  return $(
    '<article class="day">'
      + createDailyCardTop(base.dayName, base.info)
      + `<div class="day-temps">${base.maxTemp}${tempUnitLabel()} / ${base.minTemp}${tempUnitLabel()}</div>`
      + `<div class="day-muted">${tr("misc.uvShort")}: ${uv}</div>`
    + '</article>',
  );
}

function getThreeDayDetails(daily, index) {
  return {
    rainChance: daily.precipitation_probability_max && daily.precipitation_probability_max[index] != null
      ? daily.precipitation_probability_max[index]
      : "—",
    rainSum: daily.precipitation_sum && daily.precipitation_sum[index] != null
      ? `${daily.precipitation_sum[index].toFixed(1)} mm`
      : "—",
    windMax: daily.wind_speed_10m_max && daily.wind_speed_10m_max[index] != null
      ? `${Math.round(daily.wind_speed_10m_max[index])} ${windUnitLabel()}`
      : "—",
    gustMax: daily.wind_gusts_10m_max && daily.wind_gusts_10m_max[index] != null
      ? `${Math.round(daily.wind_gusts_10m_max[index])} ${windUnitLabel()}`
      : "—",
    uvMax: daily.uv_index_max && daily.uv_index_max[index] != null
      ? daily.uv_index_max[index].toFixed(1)
      : "—",
    sunrise: daily.sunrise && daily.sunrise[index] ? hhmm(daily.sunrise[index]) : "—",
    sunset: daily.sunset && daily.sunset[index] ? hhmm(daily.sunset[index]) : "—",
  };
}

function createThreeDayCard(daily, index) {
  const base = getDailyBase(daily, index);
  const details = getThreeDayDetails(daily, index);

  return $(
    '<article class="day">'
      + createDailyCardTop(base.dayName, base.info)
      + `<div class="day-temps">${base.maxTemp}${tempUnitLabel()} / ${base.minTemp}${tempUnitLabel()}</div>`
      + '<div class="day-more">'
        + `<div>💧 ${tr("more.rainChance")}: <strong>${details.rainChance}%</strong></div>`
        + `<div>🌧️ ${tr("more.rainSum")}: <strong>${details.rainSum}</strong></div>`
        + `<div>💨 ${tr("more.windMax")}: <strong>${details.windMax}</strong></div>`
        + `<div>🌬️ ${tr("more.gustMax")}: <strong>${details.gustMax}</strong></div>`
        + `<div>🔆 ${tr("more.uvMax")}: <strong>${details.uvMax}</strong></div>`
        + `<div>🌅 ${tr("more.sun")}: <strong>${details.sunrise} – ${details.sunset}</strong></div>`
      + '</div>'
    + '</article>',
  );
}

export function renderCurrent(data) {
  const current = data.current;
  const daily = data.daily;
  const info = wmo(current.weather_code);

  setCurrentPlaceTitle();
  $("#nowIcon").text(info.icon);
  $("#nowDesc").text(tr(info.text));
  $("#nowTemp").text(Math.round(current.temperature_2m));
  $("#tempUnit").text(tempUnitLabel());
  $("#tempUnit2").text(tempUnitLabel());
  $("#nowFeels").text(Math.round(current.apparent_temperature));
  $("#chipTimezone").text(data.timezone || "—");

  setDayNight(!!current.is_day);
  renderCurrentStats(data);
  renderSunInfo(daily);
  startClock();
  setWeatherEffect(current.weather_code);
  $(".hero").addClass("fade-in");
}

export function renderHourly(data) {
  const hourly = data.hourly;
  const nowIso = data.current && data.current.time ? data.current.time : null;
  const times = hourly.time || [];
  const startIndex = findStartIndex(times, nowIso);
  const endIndex = Math.min(startIndex + HOURLY_FORECAST_LIMIT, times.length);
  const list = $("#hourlyList");

  list.empty();

  for (let index = startIndex; index < endIndex; index += 1) {
    list.append(createHourItem(hourly, index));
  }

  updateHourlyHint(times, startIndex, endIndex);
  syncHourlyRange(true);
  updateTempChart(data);
}

export function renderDaily(data) {
  const daily = data.daily;
  const list = $("#dailyList");
  const count = Math.min(appState.daysMode, (daily.time || []).length);

  list.empty();
  list.removeClass("daily-3 daily-7");
  list.addClass(appState.daysMode === 3 ? "daily-3" : "daily-7");

  for (let index = 0; index < count; index += 1) {
    const card = appState.daysMode === 7
      ? createSevenDayCard(daily, index)
      : createThreeDayCard(daily, index);

    list.append(card);
  }
}

export function renderWeather(data) {
  renderCurrent(data);
  renderHourly(data);
  renderDaily(data);
}
