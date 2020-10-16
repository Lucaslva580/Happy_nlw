const options = {
dragging:false,
touchZoom: false,
doubleClickZoom:false,
scrollWheelZoom:false,
zoomControl: false
}

//create mao
const map = L.map('mapid', options).setView([-22.7892879,-43.3083302], 16);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create and add marker
L.marker([-22.7892879,-43.3083302], { icon })
.addTo(map)

/* image gallery */

function selectImage(event){
const button = event.currentTarget

//remover todas as classes .active
//buttons.forEach(function(button) => { button.classList.remove("active")})
const buttons = document.querySelectorAll(".images button")
buttons.forEach(removeActiveClass)

function removeActiveClass(button){
    button.classList.remove("active")
}


//selecionar imagem clicada

const image= button.children[0]
const imageContainer = document.querySelector(".orphanage-details > img")

//atualiza o container de image
imageContainer.src = image.src

//adicionar a classe .active para este botao
button.classList.add('active')

}
    