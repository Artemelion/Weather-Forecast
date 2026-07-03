export function showLoader() {
  $(".weather-loader").addClass("active");
}

export function hideLoader() {
  $(".weather-loader").removeClass("active");
}

export function setContentLoading(isLoading) {
  $("body").toggleClass("is-loading", isLoading);
}
