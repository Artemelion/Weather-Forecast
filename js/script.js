"use strict";

$(function () {
  $("#year").text(new Date().getFullYear());

  const data = {
    place: "Одесса",
    localTime: "Сейчас",
    text: "Облачно",
    temp: 7,
    feels: 5,
    wind: "4 м/с",
    hum: "68%",
    pres: "1016 гПа",
    hourly: [
      { t: "12:00", temp: 7, text: "Облачно" },
      { t: "13:00", temp: 8, text: "Переменная облачность" },
      { t: "14:00", temp: 8, text: "Без осадков" },
      { t: "15:00", temp: 7, text: "Облачно" }
    ],
    daily: [
      { day: "Сегодня", max: 9, min: 4 },
      { day: "Завтра", max: 7, min: 3 },
      { day: "Ср", max: 6, min: 2 },
      { day: "Чт", max: 8, min: 1 }
    ]
  };

  function show() {
    $("#placeName").text(data.place);
    $("#localTime").text(data.localTime);
    $("#conditionsText").text(data.text);

    $("#tempNow").text(sign(data.temp));
    $("#feelsLike").text(sign(data.feels) + "°C");
    $("#wind").text(data.wind);
    $("#humidity").text(data.hum);
    $("#pressure").text(data.pres);

    $("#hourlyList").empty();
    for (let i = 0; i < data.hourly.length; i++) {
      const x = data.hourly[i];
      $("#hourlyList").append(
        `<article class="hour" role="listitem">
          <div>${x.t}</div>
          <div><b>${sign(x.temp)}°C</b></div>
          <div style="color:#666; font-size:12px;">${x.text}</div>
        </article>`
      );
    }

    $("#dailyList").empty();
    for (let i = 0; i < data.daily.length; i++) {
      const d = data.daily[i];
      $("#dailyList").append(
        `<li class="day">
          <div>${d.day}</div>
          <div><b>${sign(d.max)}°</b> <span style="color:#666;">${sign(d.min)}°</span></div>
        </li>`
      );
    }
  }

  function sign(n) { return n > 0 ? "+" + n : "" + n; }

  $("#searchForm").on("submit", function (e) {
    e.preventDefault();
    const city = $("#cityInput").val().trim();
    if (city.length === 0) return;

    data.place = city;
    data.localTime = "Сейчас";
    show();
  });

  show();
});
