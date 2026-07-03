export function renderSuggestions(list) {
  const box = $("#suggestions");

  if (!list || !list.length) {
    box.removeClass("open").empty();
    return;
  }

  box.empty();

  list.forEach((place) => {
    const title = `${place.name}${place.admin1 ? `, ${place.admin1}` : ""}, ${place.country}`;
    const item = $('<div class="sugg-item" role="option" tabindex="0"></div>');

    item.text(title);
    item.data("place", place);
    box.append(item);
  });

  box.addClass("open");
}

export function hideSuggestions() {
  $("#suggestions").removeClass("open").empty();
}
