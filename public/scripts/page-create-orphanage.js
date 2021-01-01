// create map
const map = L.map("mapid").setView([35.6669392, 139.6574953], 13);

//create and add title layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name = lat]").value = lat;
  document.querySelector("[name = lng]").value = lng;

  //remove icon - this mean that icon in map will be deleted, just count the last one add
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

function addPhotoField() {

  //pegar container de fotos
  const container = document.querySelector("#images");

  //pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //realizar o clone da ultima imagem adiciona
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verificar se o campo esta vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }

  //limpar o campo antes de adicionar ao container de images
  input.value = "";
  
  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}
