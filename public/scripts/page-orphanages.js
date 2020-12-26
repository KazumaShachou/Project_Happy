// create map
const map = L.map('mapid').setView([35.6669392,139.6574953], 13);

//create and add title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl : "./public/images/map-marker.svg",
    iconSize : [58, 68],
    iconAnchor : [29, 68],
    popupAnchor : [170,2]
})

//create popup overlay
const popup = L.popup({
    closeButton : false,
    className : 'map-popup',
    minWidht : 240,
    minHeight: 240
}).setContent('Peko-chan no IE <a href="orphanages.html?id=1" class= "choose-orphanage"> img src = "./public/images/arrow-white.svg" </a>')

//create add and marker
L.marker([35.6669392,139.6574953]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup()