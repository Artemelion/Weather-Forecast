var StoreKeys = {
  settings: "wf_settings",
  lastPlace: "wf_last_place"
};

var defaultPlace = {
  name: "London",
  country: "United Kingdom",
  latitude: 51.5072,
  longitude: -0.1276,
  isGeo: false
};

var dict = {
  en: {
    brand: "WeatherForecast",
    nav: { today: "Today", forecast: "Forecast", radar: "Radar", news: "News" },
    search: { placeholder: "Search city…" },
    btn: { myLocation: "My location", signIn: "Sign in" },
    now: { feels: "Feels like" },
    stat: { wind: "Wind", humidity: "Humidity", pressure: "Pressure", clouds: "Clouds", visibility: "Visibility", uv: "UV", sunrise: "Sunrise", sunset: "Sunset" },
    hourly: { title: "Next 24 hours" },
    daily: { title: "Daily forecast" },
    radar: { title: "Radar map", note: "Interactive precipitation radar (Windy embed)." },
    news: {
      title: "Weather tips", note: "Small useful hints for today.",
      card1: { title: "How to read “Feels like”", text: "It depends on wind + humidity. Same temperature can feel colder or warmer." },
      card2: { title: "UV index", text: "UV 6+ means you should use sunscreen if you stay outside." }
    },
    footer: { powered: "Powered by" },
    misc: { day: "Day", night: "Night", near: "Near you", uvShort: "UV", geoUnsupported: "Geolocation not supported." },
    toast: { updated: "Weather updated.", geoDenied: "Geolocation denied.", net: "Network error.", cityNotFound: "City not found." },
    cond: {
      clear: "Clear", mainlyClear: "Mainly clear", partlyCloudy: "Partly cloudy", overcast: "Overcast",
      fog: "Fog", drizzle: "Drizzle", rain: "Rain", snow: "Snow", thunder: "Thunderstorm"
    },
    more: {
      rainChance: "Rain chance",
      rainSum: "Precipitation",
      windMax: "Wind max",
      gustMax: "Gusts",
      uvMax: "UV max",
      sun: "Sun"
    }
  },
  ru: {
    brand: "WeatherForecast",
    nav: { today: "Сегодня", forecast: "Прогноз", radar: "Радар", news: "Советы" },
    search: { placeholder: "Введите город…" },
    btn: { myLocation: "Моё место", signIn: "Войти" },
    now: { feels: "Ощущается как" },
    stat: { wind: "Ветер", humidity: "Влажность", pressure: "Давление", clouds: "Облачность", visibility: "Видимость", uv: "УФ", sunrise: "Восход", sunset: "Закат" },
    hourly: { title: "Ближайшие 24 часа" },
    daily: { title: "Прогноз по дням" },
    radar: { title: "Радар/карта", note: "Интерактивный радар осадков (Windy)." },
    news: {
      title: "Полезные советы", note: "Короткие подсказки на сегодня.",
      card1: { title: "Что значит “ощущается как”", text: "Зависит от ветра и влажности. Одна и та же температура ощущается по-разному." },
      card2: { title: "УФ индекс", text: "УФ 6+ — лучше использовать солнцезащитный крем, если вы на улице." }
    },
    footer: { powered: "Данные" },
    misc: { day: "День", night: "Ночь", near: "Рядом с вами", uvShort: "УФ", geoUnsupported: "Геолокация не поддерживается." },
    toast: { updated: "Погода обновлена.", geoDenied: "Геолокация запрещена.", net: "Ошибка сети.", cityNotFound: "Город не найден." },
    cond: {
      clear: "Ясно", mainlyClear: "Почти ясно", partlyCloudy: "Переменная облачность", overcast: "Пасмурно",
      fog: "Туман", drizzle: "Морось", rain: "Дождь", snow: "Снег", thunder: "Гроза"
    },
    more: {
      rainChance: "Вероятн. дождя",
      rainSum: "Осадки",
      windMax: "Ветер макс",
      gustMax: "Порывы",
      uvMax: "УФ макс",
      sun: "Солнце"
    }
  },
  ua: {
    brand: "WeatherForecast",
    nav: { today: "Сьогодні", forecast: "Прогноз", radar: "Радар", news: "Поради" },
    search: { placeholder: "Введіть місто…" },
    btn: { myLocation: "Моє місце", signIn: "Увійти" },
    now: { feels: "Відчувається як" },
    stat: { wind: "Вітер", humidity: "Вологість", pressure: "Тиск", clouds: "Хмарність", visibility: "Видимість", uv: "УФ", sunrise: "Схід", sunset: "Захід" },
    hourly: { title: "Найближчі 24 години" },
    daily: { title: "Прогноз по днях" },
    radar: { title: "Радар/мапа", note: "Інтерактивний радар опадів (Windy)." },
    news: {
      title: "Корисні поради", note: "Короткі підказки на сьогодні.",
      card1: { title: "Що означає “відчувається як”", text: "Залежить від вітру та вологості. Та сама температура може відчуватися по-різному." },
      card2: { title: "УФ індекс", text: "УФ 6+ — краще використати сонцезахисний крем, якщо ви надворі." }
    },
    footer: { powered: "Дані" },
    misc: { day: "День", night: "Ніч", near: "Поруч з вами", uvShort: "УФ", geoUnsupported: "Геолокація не підтримується." },
    toast: { updated: "Погоду оновлено.", geoDenied: "Геолокацію заборонено.", net: "Помилка мережі.", cityNotFound: "Місто не знайдено." },
    cond: {
      clear: "Ясно", mainlyClear: "Переважно ясно", partlyCloudy: "Мінлива хмарність", overcast: "Похмуро",
      fog: "Туман", drizzle: "Мряка", rain: "Дощ", snow: "Сніг", thunder: "Гроза"
    },
    more: {
      rainChance: "Ймовірн. дощу",
      rainSum: "Опади",
      windMax: "Вітер макс",
      gustMax: "Пориви",
      uvMax: "УФ макс",
      sun: "Сонце"
    }
  }
};

var app = {
  lang: null,
  theme: "auto",
  tempUnit: "c",
  windUnit: "kmh",
  daysMode: 7,
  place: $.extend({}, defaultPlace),
  geocodeTimer: null,
  clockTimer: null,
  tz: null,
  lastData: null
};

function browserLang() {
  var l = (navigator.language || "en").toLowerCase();
  if (l.indexOf("uk") === 0) return "ua";
  if (l.indexOf("ru") === 0) return "ru";
  return "en";
}

function localeName() {
  return (app.lang === "ua") ? "uk-UA" : ((app.lang === "ru") ? "ru-RU" : "en-US");
}

function tr(key) {
  var p = dict[app.lang] || dict.en;
  var parts = key.split(".");
  var cur = p;
  for (var i = 0; i < parts.length; i++) cur = cur ? cur[parts[i]] : undefined;
  return (cur === undefined) ? key : cur;
}

function readSettings() {
  try {
    var raw = localStorage.getItem(StoreKeys.settings);
    if (!raw) return;
    var s = JSON.parse(raw);
    if (s.lang) app.lang = s.lang;
    if (s.theme) app.theme = s.theme;
    if (s.tempUnit) app.tempUnit = s.tempUnit;
    if (s.windUnit) app.windUnit = s.windUnit;
  } catch (e) {}
}

function saveSettings() {
  var s = { lang: app.lang, theme: app.theme, tempUnit: app.tempUnit, windUnit: app.windUnit };
  try { localStorage.setItem(StoreKeys.settings, JSON.stringify(s)); } catch (e) {}
}

function readLastPlace() {
  try {
    var raw = localStorage.getItem(StoreKeys.lastPlace);
    if (!raw) return;
    var p = JSON.parse(raw);
    if (!p || p.latitude == null || p.longitude == null) return;
    app.place = p;
  } catch (e) {}
}

function saveLastPlace() {
  try { localStorage.setItem(StoreKeys.lastPlace, JSON.stringify(app.place)); } catch (e) {}
}

function applyTexts() {
  $("html").attr("lang", app.lang === "ua" ? "uk" : app.lang);

  $("[data-i18n]").each(function () {
    var k = $(this).data("i18n");
    $(this).text(tr(k));
  });

  $("[data-i18n-placeholder]").each(function () {
    var k = $(this).data("i18n-placeholder");
    $(this).attr("placeholder", tr(k));
  });

  $("#tempUnit2").text(tempUnitLabel());
  $("#accountBtn").text(tr("btn.signIn"));
}

function applyTheme() {
  var root = document.documentElement;
  if (app.theme === "auto") {
    var dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.setAttribute("data-theme", dark ? "dark" : "light");
    return;
  }
  root.setAttribute("data-theme", app.theme);
}

function toast(text) {
  var t = $("#toast");
  t.text(text).addClass("open");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(function () { t.removeClass("open"); }, 2200);
}

function tempUnitLabel() { return app.tempUnit === "f" ? "°F" : "°C"; }
function windUnitLabel() { return app.windUnit === "ms" ? "m/s" : "km/h"; }

function windDir(deg) {
  var dirs = ["N","NE","E","SE","S","SW","W","NW"];
  var i = Math.round(((deg % 360) / 45)) % 8;
  return dirs[i];
}

function wmo(code) {
  if (code === 0) return { icon: "☀️", text: "cond.clear" };
  if (code === 1) return { icon: "🌤️", text: "cond.mainlyClear" };
  if (code === 2) return { icon: "⛅", text: "cond.partlyCloudy" };
  if (code === 3) return { icon: "☁️", text: "cond.overcast" };
  if (code === 45 || code === 48) return { icon: "🌫️", text: "cond.fog" };
  if ([51,53,55,56,57].indexOf(code) >= 0) return { icon: "🌦️", text: "cond.drizzle" };
  if ([61,63,65,66,67,80,81,82].indexOf(code) >= 0) return { icon: "🌧️", text: "cond.rain" };
  if ([71,73,75,77,85,86].indexOf(code) >= 0) return { icon: "🌨️", text: "cond.snow" };
  if ([95,96,99].indexOf(code) >= 0) return { icon: "⛈️", text: "cond.thunder" };
  return { icon: "⛅", text: "cond.partlyCloudy" };
}

/* time helpers (без timezone-ошибок) */
function hhmm(iso) {
  if (!iso || iso.length < 16) return "—";
  return iso.slice(11, 16);
}

function weekdayShort(dateIso) {
  if (!dateIso || dateIso.length < 10) return "—";
  var d = new Date(dateIso.slice(0, 10) + "T12:00:00Z");
  return new Intl.DateTimeFormat(localeName(), { weekday: "short", timeZone: "UTC" }).format(d);
}

function fmtNowClock() {
  try {
    return new Intl.DateTimeFormat(localeName(), { dateStyle: "medium", timeStyle: "medium" }).format(new Date());
  } catch (e) {
    return new Date().toLocaleString();
  }
}

function startClock() {
  clearInterval(app.clockTimer);
  $("#updatedAt").text(fmtNowClock());
  app.clockTimer = setInterval(function () {
    $("#updatedAt").text(fmtNowClock());
  }, 1000);
}

function setDayNight(isDay) { $("#chipDayNight").text(isDay ? tr("misc.day") : tr("misc.night")); }

function setRadar(lat, lon) {
  var src =
    "https://embed.windy.com/embed2.html" +
    "?lat=" + lat +
    "&lon=" + lon +
    "&zoom=8" +
    "&level=surface" +
    "&overlay=radar" +
    "&product=radar" +
    "&calendar=now" +
    "&type=map" +
    "&location=coordinates" +
    "&detailLat=" + lat +
    "&detailLon=" + lon +
    "&radarRange=-1";
  $("#radarFrame").attr("src", src);
}

/* hourly slider sync */
function syncHourlyRange(resetToStart) {
  var list = document.getElementById("hourlyList");
  var range = document.getElementById("hourlyRange");
  if (!list || !range) return;

  var maxScroll = Math.max(0, list.scrollWidth - list.clientWidth);
  range.min = 0;
  range.max = String(maxScroll);
  range.step = "1";

  if (resetToStart) {
    list.scrollLeft = 0;
    range.value = "0";
  } else {
    range.value = String(Math.min(maxScroll, Math.max(0, list.scrollLeft)));
  }
}

function bindHourlyRange() {
  var list = document.getElementById("hourlyList");
  var range = document.getElementById("hourlyRange");
  if (!list || !range) return;

  range.addEventListener("input", function () {
    list.scrollLeft = Number(range.value);
  });

  list.addEventListener("scroll", function () {
    range.value = String(list.scrollLeft);
  });

  window.addEventListener("resize", function () {
    syncHourlyRange(false);
  });
}

function enableWheelHorizontalScroll() {
  var el = document.getElementById("hourlyList");
  if (!el) return;

  el.addEventListener("wheel", function (e) {
    if (el.scrollWidth <= el.clientWidth) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  }, { passive: false });
}

function renderCurrent(data) {
  var c = data.current;
  var d = data.daily;

  var title = app.place.isGeo ? tr("misc.near") : (app.place.name || defaultPlace.name);
  $("#placeTitle").text(title);

  var info = wmo(c.weather_code);
  $("#nowIcon").text(info.icon);
  $("#nowDesc").text(tr(info.text));

  $("#nowTemp").text(Math.round(c.temperature_2m));
  $("#tempUnit").text(tempUnitLabel());
  $("#tempUnit2").text(tempUnitLabel());
  $("#nowFeels").text(Math.round(c.apparent_temperature));

  setDayNight(!!c.is_day);
  $("#chipTimezone").text(data.timezone || "—");

  $("#statWind").text(Math.round(c.wind_speed_10m) + " " + windUnitLabel());
  $("#statWindDir").text(windDir(c.wind_direction_10m) + " (" + Math.round(c.wind_direction_10m) + "°)");

  $("#statHumidity").text(Math.round(c.relative_humidity_2m));
  $("#statPressure").text(Math.round(c.pressure_msl));
  var idx = 0;
if (data.hourly && data.hourly.time && data.current && data.current.time) {
  idx = Math.max(0, data.hourly.time.indexOf(data.current.time));
}

var clouds = (c.cloud_cover != null) ? c.cloud_cover : (data.hourly && data.hourly.cloud_cover ? data.hourly.cloud_cover[idx] : null);
$("#statClouds").text(clouds == null ? "—" : Math.round(clouds));

var vis = (c.visibility != null) ? c.visibility : (data.hourly && data.hourly.visibility ? data.hourly.visibility[idx] : null);
var visKm = (vis != null) ? (vis / 1000) : null;
$("#statVisibility").text(visKm == null ? "—" : visKm.toFixed(1));

var uv = (c.uv_index != null) ? c.uv_index : (data.hourly && data.hourly.uv_index ? data.hourly.uv_index[idx] : null);
$("#statUV").text(uv == null ? "—" : Number(uv).toFixed(1));


  if (d && d.sunrise && d.sunrise[0]) $("#statSunrise").text(hhmm(d.sunrise[0]));
  if (d && d.sunset && d.sunset[0]) $("#statSunset").text(hhmm(d.sunset[0]));

  startClock();
}

function findStartIndex(times, nowIso) {
  if (!times || !times.length) return 0;
  if (nowIso) {
    for (var i = 0; i < times.length; i++) {
      if (times[i] >= nowIso) return i;
    }
  }
  return 0;
}

function renderHourly(data) {
  var h = data.hourly;
  var nowIso = data.current && data.current.time ? data.current.time : null;

  var times = h.time || [];
  var startIndex = findStartIndex(times, nowIso);
  var endIndex = Math.min(startIndex + 24, times.length);

  var list = $("#hourlyList");
  list.empty();

  for (var k = startIndex; k < endIndex; k++) {
    var info = wmo(h.weather_code[k]);
    var timeLabel = hhmm(times[k]);

    var pr = (h.precipitation_probability && h.precipitation_probability[k] != null) ? h.precipitation_probability[k] : 0;
    var wind = (h.wind_speed_10m && h.wind_speed_10m[k] != null) ? Math.round(h.wind_speed_10m[k]) : 0;

    var item = $(
      '<div class="hour">' +
        '<div class="hour-t">' + timeLabel + '</div>' +
        '<div class="hour-temp">' + Math.round(h.temperature_2m[k]) + tempUnitLabel() + '</div>' +
        '<div class="hour-meta">' +
          '<div>' + info.icon + ' ' + tr(info.text) + '</div>' +
          '<div>💧 ' + pr + '%</div>' +
          '<div>💨 ' + wind + ' ' + windUnitLabel() + '</div>' +
        '</div>' +
      '</div>'
    );

    list.append(item);
  }

  if (times[startIndex] && times[endIndex - 1]) {
    $("#hourlyHint").text(hhmm(times[startIndex]) + " – " + hhmm(times[endIndex - 1]));
  } else {
    $("#hourlyHint").text("—");
  }

  syncHourlyRange(true);
}

function renderDaily(data) {
  var d = data.daily;
  var list = $("#dailyList");
  list.empty();

  list.removeClass("daily-3 daily-7");
  list.addClass(app.daysMode === 3 ? "daily-3" : "daily-7");

  var count = Math.min(app.daysMode, (d.time || []).length);

  for (var i = 0; i < count; i++) {
    var info = wmo(d.weather_code[i]);
    var dayName = weekdayShort(d.time[i]);

    var maxT = Math.round(d.temperature_2m_max[i]);
    var minT = Math.round(d.temperature_2m_min[i]);

    if (app.daysMode === 7) {
      var uv7 = (d.uv_index_max && d.uv_index_max[i] != null) ? d.uv_index_max[i].toFixed(1) : "—";
      var card7 = $(
        '<article class="day">' +
          '<div class="day-top">' +
            '<div>' +
              '<div class="day-name">' + dayName + '</div>' +
              '<div class="day-muted">' + tr(info.text) + '</div>' +
            '</div>' +
            '<div class="day-icon" aria-hidden="true">' + info.icon + '</div>' +
          '</div>' +
          '<div class="day-temps">' + maxT + tempUnitLabel() + " / " + minT + tempUnitLabel() + '</div>' +
          '<div class="day-muted">' + tr("misc.uvShort") + ': ' + uv7 + '</div>' +
        '</article>'
      );
      list.append(card7);
      continue;
    }

    var prMax = (d.precipitation_probability_max && d.precipitation_probability_max[i] != null) ? d.precipitation_probability_max[i] : "—";
    var prSum = (d.precipitation_sum && d.precipitation_sum[i] != null) ? d.precipitation_sum[i].toFixed(1) + " mm" : "—";
    var wMax = (d.wind_speed_10m_max && d.wind_speed_10m_max[i] != null) ? Math.round(d.wind_speed_10m_max[i]) + " " + windUnitLabel() : "—";
    var gMax = (d.wind_gusts_10m_max && d.wind_gusts_10m_max[i] != null) ? Math.round(d.wind_gusts_10m_max[i]) + " " + windUnitLabel() : "—";
    var uv3 = (d.uv_index_max && d.uv_index_max[i] != null) ? d.uv_index_max[i].toFixed(1) : "—";

    var sr = (d.sunrise && d.sunrise[i]) ? hhmm(d.sunrise[i]) : "—";
    var ss = (d.sunset && d.sunset[i]) ? hhmm(d.sunset[i]) : "—";

    var card3 = $(
      '<article class="day">' +
        '<div class="day-top">' +
          '<div>' +
            '<div class="day-name">' + dayName + '</div>' +
            '<div class="day-muted">' + tr(info.text) + '</div>' +
          '</div>' +
          '<div class="day-icon" aria-hidden="true">' + info.icon + '</div>' +
        '</div>' +
        '<div class="day-temps">' + maxT + tempUnitLabel() + " / " + minT + tempUnitLabel() + '</div>' +
        '<div class="day-more">' +
          '<div>💧 ' + tr("more.rainChance") + ': <strong>' + prMax + '%</strong></div>' +
          '<div>🌧️ ' + tr("more.rainSum") + ': <strong>' + prSum + '</strong></div>' +
          '<div>💨 ' + tr("more.windMax") + ': <strong>' + wMax + '</strong></div>' +
          '<div>🌬️ ' + tr("more.gustMax") + ': <strong>' + gMax + '</strong></div>' +
          '<div>🔆 ' + tr("more.uvMax") + ': <strong>' + uv3 + '</strong></div>' +
          '<div>🌅 ' + tr("more.sun") + ': <strong>' + sr + " – " + ss + '</strong></div>' +
        '</div>' +
      '</article>'
    );
    list.append(card3);
  }
}

function refreshAll() {
  $("body").addClass("is-loading");

  return Api.forecast(app.place.latitude, app.place.longitude, {
    tempUnit: app.tempUnit,
    windUnit: app.windUnit
  })
    .then(function (data) {
      $("body").removeClass("is-loading");
      app.lastData = data;

      renderCurrent(data);
      renderHourly(data);
      renderDaily(data);
      setRadar(app.place.latitude, app.place.longitude);

      toast(tr("toast.updated"));
    })
    .catch(function () {
      $("body").removeClass("is-loading");
      toast(tr("toast.net"));
    });
}

function renderSuggestions(list) {
  var box = $("#suggestions");
  if (!list || !list.length) {
    box.removeClass("open").empty();
    return;
  }

  box.empty();
  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    var title = p.name + (p.admin1 ? ", " + p.admin1 : "") + ", " + p.country;

    var item = $('<div class="sugg-item" role="option" tabindex="0"></div>');
    item.text(title);
    item.data("place", p);
    box.append(item);
  }

  box.addClass("open");
}

function setPlaceFromGeo(p) {
  app.place = {
    name: p.name,
    country: p.country,
    latitude: p.latitude,
    longitude: p.longitude,
    isGeo: false
  };
  saveLastPlace();
}

function hideSuggestions() {
  $("#suggestions").removeClass("open").empty();
}

function requestGeo() {
  if (!navigator.geolocation) {
    toast(tr("misc.geoUnsupported"));
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function (pos) {
      app.place = {
        name: tr("misc.near"),
        country: "",
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        isGeo: true
      };
      saveLastPlace();
      refreshAll();
    },
    function (err) {
      if (!err) {
        toast(tr("toast.geoDenied"));
        return;
      }

      if (err.code === 1) {
        // PERMISSION_DENIED
        toast(tr("toast.geoDenied"));
      }
      else if (err.code === 2) {
        // POSITION_UNAVAILABLE
        toast("Location unavailable.");
      }
      else if (err.code === 3) {
        // TIMEOUT
        toast("Geolocation timeout.");
      }
      else {
        toast("Geolocation error.");
      }

      console.log("Geolocation error:", err.code, err.message);
    },
    {
      enableHighAccuracy: false,
      timeout: 15000,
      maximumAge: 60000
    }
  );
}


function bindUI() {
  $("#langSelect").on("change", function () {
    app.lang = $(this).val();
    saveSettings();
    applyTexts();

    if (app.lastData) {
      renderCurrent(app.lastData);
      renderHourly(app.lastData);
      renderDaily(app.lastData);
    } else {
      refreshAll();
    }
  });

  $("#themeToggle").on("click", function () {
    app.theme = (app.theme === "auto") ? "light" : (app.theme === "light" ? "dark" : "auto");
    saveSettings();
    applyTheme();
  });

  $("#btnMyLocation").on("click", function () { requestGeo(); });

  $("#q").on("input", function () {
    var q = String($(this).val() || "").trim();
    clearTimeout(app.geocodeTimer);

    if (q.length < 2) { hideSuggestions(); return; }

    app.geocodeTimer = setTimeout(function () {
      Api.geoSearch(q, app.lang)
        .then(function (res) { renderSuggestions(res); })
        .catch(function () { hideSuggestions(); });
    }, 250);
  });

  $("#suggestions").on("click", ".sugg-item", function () {
    var p = $(this).data("place");
    if (!p) return;
    setPlaceFromGeo(p);
    $("#q").val(p.name);
    hideSuggestions();
    refreshAll();
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".search").length) hideSuggestions();
  });

  $("#searchForm").on("submit", function (e) {
    e.preventDefault();
    var q = String($("#q").val() || "").trim();
    if (q.length < 2) return;

    Api.geoSearch(q, app.lang)
      .then(function (res) {
        if (res && res[0]) {
          setPlaceFromGeo(res[0]);
          hideSuggestions();
          refreshAll();
        } else {
          toast(tr("toast.cityNotFound"));
        }
      })
      .catch(function () { toast(tr("toast.net")); });
  });

  $("#btn3days").on("click", function () {
    app.daysMode = 3;
    $("#btn3days").addClass("is-active");
    $("#btn7days").removeClass("is-active");

    if (app.lastData) renderDaily(app.lastData);
  });

  $("#btn7days").on("click", function () {
    app.daysMode = 7;
    $("#btn7days").addClass("is-active");
    $("#btn3days").removeClass("is-active");

    if (app.lastData) renderDaily(app.lastData);
  });
}

function init() {
  app.lang = browserLang();
  readSettings();

  if (!dict[app.lang]) app.lang = "en";
  $("#langSelect").val(app.lang);

  readLastPlace();

  applyTheme();
  applyTexts();
  bindUI();

  bindHourlyRange();
  enableWheelHorizontalScroll();

  refreshAll();
  setInterval(function () { refreshAll(); }, 10 * 60 * 1000);
}

$(init);
