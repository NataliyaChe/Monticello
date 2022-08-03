let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.655, lng: -73.891 },
    zoom: 13,
  });
}

window.initMap = initMap;