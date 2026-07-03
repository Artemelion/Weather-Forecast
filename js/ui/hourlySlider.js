export function syncHourlyRange(resetToStart) {
  const list = document.getElementById("hourlyList");
  const range = document.getElementById("hourlyRange");

  if (!list || !range) return;

  const maxScroll = Math.max(0, list.scrollWidth - list.clientWidth);

  range.min = 0;
  range.max = String(maxScroll);
  range.step = "1";

  if (resetToStart) {
    list.scrollLeft = 0;
    range.value = "0";
    return;
  }

  range.value = String(Math.min(maxScroll, Math.max(0, list.scrollLeft)));
}

export function bindHourlyRange() {
  const list = document.getElementById("hourlyList");
  const range = document.getElementById("hourlyRange");

  if (!list || !range) return;

  range.addEventListener("input", () => {
    list.scrollLeft = Number(range.value);
  });

  list.addEventListener("scroll", () => {
    range.value = String(list.scrollLeft);
  });

  window.addEventListener("resize", () => {
    syncHourlyRange(false);
  });
}

export function enableWheelHorizontalScroll() {
  const element = document.getElementById("hourlyList");

  if (!element) return;

  element.addEventListener("wheel", (event) => {
    if (element.scrollWidth <= element.clientWidth) return;

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      element.scrollLeft += event.deltaY;
    }
  }, { passive: false });
}
