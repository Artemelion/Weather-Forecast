import { forecast } from "../api/api.js";
import { GEOLOCATION_OPTIONS } from "../utils/constants.js";
import { tr } from "../utils/helpers.js";
import { appState, updateLastData, updatePlace } from "../state/state.js";
import { saveLastPlace } from "../storage/storage.js";
import { setContentLoading, hideLoader, showLoader } from "../ui/loader.js";
import { showToast } from "../ui/notifications.js";
import { setRadar } from "../ui/radar.js";
import { renderWeather } from "../ui/render.js";

export function setPlaceFromGeo(place) {
  updatePlace({
    name: place.name,
    country: place.country,
    latitude: place.latitude,
    longitude: place.longitude,
    isGeo: false,
  });

  saveLastPlace();
}

export function refreshWeather() {
  showLoader();
  setContentLoading(true);

  return Promise.resolve(forecast(appState.place.latitude, appState.place.longitude, {
    tempUnit: appState.tempUnit,
    windUnit: appState.windUnit,
  }))
    .then((data) => {
      setContentLoading(false);
      updateLastData(data);

      renderWeather(data);
      setRadar(appState.place.latitude, appState.place.longitude);
      showToast(tr("toast.updated"));

      return data;
    })
    .catch(() => {
      setContentLoading(false);
      showToast(tr("toast.net"));
    })
    .finally(() => {
      hideLoader();
    });
}

export function requestGeo() {
  if (!navigator.geolocation) {
    showToast(tr("misc.geoUnsupported"));
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      updatePlace({
        name: tr("misc.near"),
        country: "",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        isGeo: true,
      });

      saveLastPlace();
      refreshWeather();
    },
    (error) => {
      if (!error) {
        showToast(tr("toast.geoDenied"));
        return;
      }

      if (error.code === 1) {
        showToast(tr("toast.geoDenied"));
      } else if (error.code === 2) {
        showToast("Location unavailable.");
      } else if (error.code === 3) {
        showToast("Geolocation timeout.");
      } else {
        showToast("Geolocation error.");
      }

      console.log("Geolocation error:", error.code, error.message);
    },
    GEOLOCATION_OPTIONS,
  );
}
