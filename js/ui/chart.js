import { HOURLY_FORECAST_LIMIT } from "../utils/constants.js";
import { findStartIndex, hhmm, tempUnitLabel } from "../utils/helpers.js";

let chart = null;

function getChartColors() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

  return {
    gridColor: isDark ? "rgba(233,238,252,.14)" : "rgba(11,18,32,.12)",
    textColor: isDark ? "rgba(233,238,252,.78)" : "rgba(11,18,32,.65)",
  };
}

function getChartData(data) {
  const hourly = data.hourly;
  const nowIso = data.current && data.current.time ? data.current.time : null;
  const times = hourly.time || [];
  const startIndex = findStartIndex(times, nowIso);
  const endIndex = Math.min(startIndex + HOURLY_FORECAST_LIMIT, times.length);
  const labels = [];
  const temps = [];

  for (let index = startIndex; index < endIndex; index += 1) {
    labels.push(hhmm(times[index]));
    temps.push(Math.round(hourly.temperature_2m[index]));
  }

  return { labels, temps };
}

export function updateTempChart(data) {
  const canvas = document.getElementById("tempChart");

  if (!canvas) return;

  const { labels, temps } = getChartData(data);
  const { gridColor, textColor } = getChartColors();

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Temperature",
        data: temps,
        borderColor: "rgba(26, 124, 255, 1)",
        backgroundColor: "rgba(26, 124, 255, 0.1)",
        tension: 0.4,
        fill: true,
        pointRadius: 3,
        pointHoverRadius: 6,
        pointBackgroundColor: "rgba(26, 124, 255, 1)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.parsed.y}${tempUnitLabel()}`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            color: gridColor,
          },
          ticks: {
            color: textColor,
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: 8,
          },
        },
        y: {
          grid: {
            color: gridColor,
          },
          ticks: {
            color: textColor,
            callback(value) {
              return `${value}°`;
            },
          },
        },
      },
    },
  });
}
