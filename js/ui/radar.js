export function setRadar(lat, lon) {
  const src = "https://embed.windy.com/embed2.html"
    + `?lat=${lat}`
    + `&lon=${lon}`
    + "&zoom=8"
    + "&level=surface"
    + "&overlay=radar"
    + "&product=radar"
    + "&calendar=now"
    + "&type=map"
    + "&location=coordinates"
    + `&detailLat=${lat}`
    + `&detailLon=${lon}`
    + "&radarRange=-1";

  $("#radarFrame").attr("src", src);
}
