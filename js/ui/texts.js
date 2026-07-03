import { tempUnitLabel, tr } from "../utils/helpers.js";
import { appState } from "../state/state.js";

export function applyTexts() {
  $("html").attr("lang", appState.lang === "ua" ? "uk" : appState.lang);

  $("[data-i18n]").each(function () {
    const key = $(this).data("i18n");
    $(this).text(tr(key));
  });

  $("[data-i18n-placeholder]").each(function () {
    const key = $(this).data("i18n-placeholder");
    $(this).attr("placeholder", tr(key));
  });

  $("#tempUnit2").text(tempUnitLabel());
  $("#accountBtn").text(tr("btn.signIn"));
}
