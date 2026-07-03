export function bindMobileMenu() {
  const menu = $(".menu");
  const toggle = $("#menuToggle");

  if (!toggle.length || !menu.length) return;

  toggle.off("click").on("click", (event) => {
    event.stopPropagation();

    const opened = menu.hasClass("is-open");

    menu.toggleClass("is-open", !opened);
    toggle.attr("aria-expanded", String(!opened));
  });

  $(document).on("click.menuclose", (event) => {
    if (!$(event.target).closest(".topbar-inner").length) {
      menu.removeClass("is-open");
      toggle.attr("aria-expanded", "false");
    }
  });

  menu.find("a").on("click", () => {
    menu.removeClass("is-open");
    toggle.attr("aria-expanded", "false");
  });
}
