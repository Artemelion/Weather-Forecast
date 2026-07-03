export const STORE_KEYS = {
  settings: "wf_settings",
  lastPlace: "wf_last_place",
};

export const DEFAULT_PLACE = {
  name: "London",
  country: "United Kingdom",
  latitude: 51.5072,
  longitude: -0.1276,
  isGeo: false,
};

export const DEFAULT_LANGUAGE = "en";
export const GEO_SEARCH_DELAY_MS = 250;
export const TOAST_TIMEOUT_MS = 2200;
export const WEATHER_UPDATE_INTERVAL_MS = 10 * 60 * 1000;

export const HOURLY_FORECAST_LIMIT = 24;
export const DEFAULT_DAYS_MODE = 7;
export const SHORT_DAYS_MODE = 3;

export const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: false,
  timeout: 15000,
  maximumAge: 60000,
};

export const WEATHER_EFFECTS = {
  rainDrops: 100,
  snowFlakes: 50,
};

export const WEATHER_CODES = {
  drizzle: [51, 53, 55, 56, 57],
  rain: [61, 63, 65, 66, 67, 80, 81, 82],
  snow: [71, 73, 75, 77, 85, 86],
  thunder: [95, 96, 99],
};

export const API_ENDPOINTS = {
  geocode: "https://geocoding-api.open-meteo.com/v1/search",
  forecast: "https://api.open-meteo.com/v1/forecast",
};

export const FORECAST_FIELDS = {
  current: [
    "temperature_2m",
    "apparent_temperature",
    "weather_code",
    "is_day",
    "relative_humidity_2m",
    "pressure_msl",
    "wind_speed_10m",
    "wind_direction_10m",
  ],
  hourly: [
    "temperature_2m",
    "weather_code",
    "precipitation_probability",
    "wind_speed_10m",
    "cloud_cover",
    "visibility",
    "uv_index",
  ],
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
    "sunset",
  ],
};

export const DICTIONARY = {
  en: {
    brand: "WeatherForecast",
    nav: { today: "Today", forecast: "Forecast", radar: "Radar", news: "News" },
    search: { placeholder: "Search city…" },
    btn: { myLocation: "My location", signIn: "Sign in", search: "Search" },
    now: { feels: "Feels like" },
    stat: { wind: "Wind", humidity: "Humidity", pressure: "Pressure", clouds: "Clouds", visibility: "Visibility", uv: "UV", sunrise: "Sunrise", sunset: "Sunset" },
    hourly: { title: "Next 24 hours" },
    daily: { title: "Daily forecast" },
    radar: { title: "Radar map", note: "Interactive precipitation radar (Windy embed)." },
    news: {
      title: "Weather tips", note: "Small useful hints for today.",
      card1: { title: "How to read “Feels like”", text: "It depends on wind + humidity. Same temperature can feel colder or warmer." },
      card2: { title: "UV index", text: "UV 6+ means you should use sunscreen if you stay outside." },
    },
    footer: { powered: "Powered by" },
    misc: { day: "Day", night: "Night", near: "Near you", uvShort: "UV", geoUnsupported: "Geolocation not supported." },
    toast: { updated: "Weather updated.", geoDenied: "Geolocation denied.", net: "Network error.", cityNotFound: "City not found." },
    cond: {
      clear: "Clear", mainlyClear: "Mainly clear", partlyCloudy: "Partly cloudy", overcast: "Overcast",
      fog: "Fog", drizzle: "Drizzle", rain: "Rain", snow: "Snow", thunder: "Thunderstorm",
    },
    more: {
      rainChance: "Rain chance",
      rainSum: "Precipitation",
      windMax: "Wind max",
      gustMax: "Gusts",
      uvMax: "UV max",
      sun: "Sun",
    },
  },
  ru: {
    brand: "WeatherForecast",
    nav: { today: "Сегодня", forecast: "Прогноз", radar: "Радар", news: "Советы" },
    search: { placeholder: "Введите город…" },
    btn: { myLocation: "Моё место", signIn: "Войти", search: "Найти" },
    now: { feels: "Ощущается как" },
    stat: { wind: "Ветер", humidity: "Влажность", pressure: "Давление", clouds: "Облачность", visibility: "Видимость", uv: "УФ", sunrise: "Восход", sunset: "Закат" },
    hourly: { title: "Ближайшие 24 часа" },
    daily: { title: "Прогноз по дням" },
    radar: { title: "Радар/карта", note: "Интерактивный радар осадков (Windy)." },
    news: {
      title: "Полезные советы", note: "Короткие подсказки на сегодня.",
      card1: { title: "Что значит “ощущается как”", text: "Зависит от ветра и влажности. Одна и та же температура ощущается по-разному." },
      card2: { title: "УФ индекс", text: "УФ 6+ — лучше использовать солнцезащитный крем, если вы на улице." },
    },
    footer: { powered: "Данные" },
    misc: { day: "День", night: "Ночь", near: "Рядом с вами", uvShort: "УФ", geoUnsupported: "Геолокация не поддерживается." },
    toast: { updated: "Погода обновлена.", geoDenied: "Геолокация запрещена.", net: "Ошибка сети.", cityNotFound: "Город не найден." },
    cond: {
      clear: "Ясно", mainlyClear: "Почти ясно", partlyCloudy: "Переменная облачность", overcast: "Пасмурно",
      fog: "Туман", drizzle: "Морось", rain: "Дождь", snow: "Снег", thunder: "Гроза",
    },
    more: {
      rainChance: "Вероятн. дождя",
      rainSum: "Осадки",
      windMax: "Ветер макс",
      gustMax: "Порывы",
      uvMax: "УФ макс",
      sun: "Солнце",
    },
  },
  ua: {
    brand: "WeatherForecast",
    nav: { today: "Сьогодні", forecast: "Прогноз", radar: "Радар", news: "Поради" },
    search: { placeholder: "Введіть місто…" },
    btn: { myLocation: "Моє місце", signIn: "Увійти", search: "Знайти" },
    now: { feels: "Відчувається як" },
    stat: { wind: "Вітер", humidity: "Вологість", pressure: "Тиск", clouds: "Хмарність", visibility: "Видимість", uv: "УФ", sunrise: "Схід", sunset: "Захід" },
    hourly: { title: "Найближчі 24 години" },
    daily: { title: "Прогноз по днях" },
    radar: { title: "Радар/мапа", note: "Інтерактивний радар опадів (Windy)." },
    news: {
      title: "Корисні поради", note: "Короткі підказки на сьогодні.",
      card1: { title: "Що означає “відчувається як”", text: "Залежить від вітру та вологості. Та сама температура може відчуватися по-різному." },
      card2: { title: "УФ індекс", text: "УФ 6+ — краще використати сонцезахисний крем, якщо ви надворі." },
    },
    footer: { powered: "Дані" },
    misc: { day: "День", night: "Ніч", near: "Поруч з вами", uvShort: "УФ", geoUnsupported: "Геолокація не підтримується." },
    toast: { updated: "Погоду оновлено.", geoDenied: "Геолокацію заборонено.", net: "Помилка мережі.", cityNotFound: "Місто не знайдено." },
    cond: {
      clear: "Ясно", mainlyClear: "Переважно ясно", partlyCloudy: "Мінлива хмарність", overcast: "Похмуро",
      fog: "Туман", drizzle: "Мряка", rain: "Дощ", snow: "Сніг", thunder: "Гроза",
    },
    more: {
      rainChance: "Ймовірн. дощу",
      rainSum: "Опади",
      windMax: "Вітер макс",
      gustMax: "Пориви",
      uvMax: "УФ макс",
      sun: "Сонце",
    },
  },
};
