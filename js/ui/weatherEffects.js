import { WEATHER_CODES, WEATHER_EFFECTS } from "../utils/constants.js";

let container = null;
let currentEffect = null;

function clearEffect() {
  if (container) {
    container.innerHTML = "";
  }

  currentEffect = null;
}

function createRain() {
  clearEffect();
  currentEffect = "rain";

  if (!container) return;

  for (let i = 0; i < WEATHER_EFFECTS.rainDrops; i += 1) {
    const drop = document.createElement("div");

    drop.className = "rain";
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
    drop.style.animationDelay = `${Math.random() * 2}s`;

    container.appendChild(drop);
  }
}

function createSnow() {
  clearEffect();
  currentEffect = "snow";

  if (!container) return;

  for (let i = 0; i < WEATHER_EFFECTS.snowFlakes; i += 1) {
    const flake = document.createElement("div");

    flake.className = "snow";
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    flake.style.animationDelay = `${Math.random() * 5}s`;

    container.appendChild(flake);
  }
}

export function initWeatherEffects() {
  container = document.getElementById("weatherEffect");
}

export function setWeatherEffect(weatherCode) {
  const rainCodes = WEATHER_CODES.drizzle.concat(WEATHER_CODES.rain);

  if (rainCodes.includes(weatherCode)) {
    if (currentEffect !== "rain") createRain();
    return;
  }

  if (WEATHER_CODES.snow.includes(weatherCode)) {
    if (currentEffect !== "snow") createSnow();
    return;
  }

  clearEffect();
}
