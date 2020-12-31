// create map
const map = L.map('mapid').setView([35.6669392,139.6574953], 13);

//create and add title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl : "./public/images/map-marker.svg",
    iconSize : [58, 68],
    iconAnchor : [29, 68],

})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //remove icon - this mean that icon in map will be deleted, just count the last one add
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})