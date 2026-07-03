import { geoSearch } from "../api/api.js";
import { GEO_SEARCH_DELAY_MS, DEFAULT_DAYS_MODE, SHORT_DAYS_MODE } from "../utils/constants.js";
import { tr } from "../utils/helpers.js";
import { appState } from "../state/state.js";
import { saveSettings } from "../storage/storage.js";
import { applyTexts } from "../ui/texts.js";
import { toggleTheme } from "../ui/theme.js";
import { showToast } from "../ui/notifications.js";
import { renderCurrent, renderDaily, renderHourly } from "../ui/render.js";
import { renderSuggestions, hideSuggestions } from "../ui/suggestions.js";
import { updateTempChart } from "../ui/chart.js";
import { bindMobileMenu } from "../ui/mobileMenu.js";
import { refreshWeather, requestGeo, setPlaceFromGeo } from "../services/weatherService.js";

function rerenderWeatherTexts() {
  if (!appState.lastData) {
    refreshWeather();
    return;
  }

  renderCurrent(appState.lastData);
  renderHourly(appState.lastData);
  renderDaily(appState.lastData);
}

function setDaysMode(mode) {
  appState.daysMode = mode;

  $("#btn3days").toggleClass("is-active", mode === SHORT_DAYS_MODE);
  $("#btn7days").toggleClass("is-active", mode === DEFAULT_DAYS_MODE);

  if (appState.lastData) {
    renderDaily(appState.lastData);
  }
}

function bindLanguageSelect() {
  $("#langSelect").on("change", function () {
    appState.lang = $(this).val();
    saveSettings();
    applyTexts();
    rerenderWeatherTexts();
  });
}

function bindThemeToggle() {
  $("#themeToggle").on("click", () => {
    toggleTheme();
    saveSettings();

    if (appState.lastData) {
      updateTempChart(appState.lastData);
    }
  });
}

function bindSearchInput() {
  $("#q").on("input", function () {
    const query = String($(this).val() || "").trim();

    clearTimeout(appState.geocodeTimer);

    if (query.length < 2) {
      hideSuggestions();
      return;
    }

    appState.geocodeTimer = setTimeout(() => {
      geoSearch(query, appState.lang)
        .then((result) => renderSuggestions(result))
        .catch(() => hideSuggestions());
    }, GEO_SEARCH_DELAY_MS);
  });
}

function bindSuggestionSelect() {
  $("#suggestions").on("click", ".sugg-item", function () {
    const place = $(this).data("place");

    if (!place) return;

    setPlaceFromGeo(place);
    $("#q").val(place.name);
    hideSuggestions();
    refreshWeather();
  });

  $(document).on("click", (event) => {
    if (!$(event.target).closest(".search").length) {
      hideSuggestions();
    }
  });
}

function bindSearchSubmit() {
  $("#searchForm").on("submit", (event) => {
    const query = String($("#q").val() || "").trim();

    event.preventDefault();

    if (query.length < 2) return;

    geoSearch(query, appState.lang)
      .then((result) => {
        if (result && result[0]) {
          setPlaceFromGeo(result[0]);
          hideSuggestions();
          refreshWeather();
          return;
        }

        showToast(tr("toast.cityNotFound"));
      })
      .catch(() => showToast(tr("toast.net")));
  });
}

function bindDaysModeButtons() {
  $("#btn3days").on("click", () => setDaysMode(SHORT_DAYS_MODE));
  $("#btn7days").on("click", () => setDaysMode(DEFAULT_DAYS_MODE));
}

export function bindUI() {
  bindLanguageSelect();
  bindThemeToggle();
  bindSearchInput();
  bindSuggestionSelect();
  bindSearchSubmit();
  bindDaysModeButtons();
  bindMobileMenu();

  $("#btnMyLocation").on("click", () => requestGeo());
}
