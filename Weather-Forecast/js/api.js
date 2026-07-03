var Api = (function () {
  var GEO = "https://geocoding-api.open-meteo.com/v1/search";
  var FC  = "https://api.open-meteo.com/v1/forecast";

  function qs(obj) {
    var s = [];
    for (var k in obj) {
      if (obj[k] === undefined || obj[k] === null) continue;
      s.push(encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]));
    }
    return s.join("&");
  }

  function geoSearch(name, lang) {
    var url = GEO + "?" + qs({
      name: name,
      count: 7,
      language: lang || "en",
      format: "json"
    });

    return $.getJSON(url).then(function (r) {
      return (r && r.results) ? r.results : [];
    });
  }

  function forecast(lat, lon, opts) {
    opts = opts || {};

    var url = FC + "?" + qs({
      latitude: lat,
      longitude: lon,
      timezone: "auto",

      /* ===== CURRENT (ТОЛЬКО ПОДДЕРЖИВАЕМЫЕ ПОЛЯ) ===== */
      current: [
        "temperature_2m",
        "apparent_temperature",
        "weather_code",
        "is_day",
        "relative_humidity_2m",
        "pressure_msl",
        "wind_speed_10m",
        "wind_direction_10m"
      ].join(","),

      /* ===== HOURLY ===== */
      hourly: [
        "temperature_2m",
        "weather_code",
        "precipitation_probability",
        "wind_speed_10m",
        "cloud_cover",
        "visibility",
        "uv_index"
      ].join(","),

      /* ===== DAILY ===== */
      daily: [
        "weather_code",
        "temperature_2m_max",
        "temperature_2m_min",
        "precipitation_sum",
        "precipitation_probability_max",
        "wind_speed_10m_max",
        "wind_gusts_10m_max",
        "uv_index_max",
        "sunrise",
        "sunset"
      ].join(","),

      temperature_unit: (opts.tempUnit === "f") ? "fahrenheit" : "celsius",
      wind_speed_unit: (opts.windUnit === "ms") ? "ms" : "kmh",
      precipitation_unit: "mm"
    });

    return $.getJSON(url);
  }

  return {
    geoSearch: geoSearch,
    forecast: forecast
  };
})();
