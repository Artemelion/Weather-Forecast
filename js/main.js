import { DEFAULT_LANGUAGE, DICTIONARY, WEATHER_UPDATE_INTERVAL_MS } from "./utils/constants.js";
import { browserLang } from "./utils/helpers.js";
import { appState } from "./state/state.js";
import { readLastPlace, readSettings } from "./storage/storage.js";
import { applyTexts } from "./ui/texts.js";
import { applyTheme } from "./ui/theme.js";
import { bindHourlyRange, enableWheelHorizontalScroll } from "./ui/hourlySlider.js";
import { initWeatherEffects } from "./ui/weatherEffects.js";
import { bindUI } from "./events/listeners.js";
import { refreshWeather } from "./services/weatherService.js";

function initLanguage() {
  appState.lang = browserLang();
  readSettings();

  if (!DICTIONARY[appState.lang]) {
    appState.lang = DEFAULT_LANGUAGE;
  }

  $("#langSelect").val(appState.lang);
}

function init() {
  initWeatherEffects();
  initLanguage();
  readLastPlace();

  applyTheme();
  applyTexts();
  bindUI();
  bindHourlyRange();
  enableWheelHorizontalScroll();

  refreshWeather();
  setInterval(() => {
    refreshWeather();
  }, WEATHER_UPDATE_INTERVAL_MS);
}

$(init);
