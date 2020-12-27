const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom:false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// create map
const map = L.map("mapid", options).setView([35.6669392, 139.6574953], 13);

//create and add title layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68], 
  popupAnchor: [170, 2],
});

//create add and marker
L.marker([35.6669392, 139.6574953], { icon }).addTo(map);
