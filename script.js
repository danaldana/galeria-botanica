const info = document.getElementById("card-dendrobium")

// info.onclick = () => {
//     info.textContent = "Dendrobium"
// }



// VENTANA MODAL
const modal = document.getElementById("modal")

const botonAbrirModal1 = document.getElementById("card-dendrobium")
const botonAbrirModal2 = document.getElementById("card-helianthus")
const botonAbrirModal3 = document.getElementById("card-ficus")
const botonAbrirModal4 = document.getElementById("card-nyctocalos")
const botonAbrirModal5 = document.getElementById("card-passiflora")
const botonAbrirModal6 = document.getElementById("card-polianthes")

const botonCerrarModal = document.getElementById("cerrar-modal")

// INFORMACION TARJETAS MODAL
const titulo = document.getElementById("titulo-modal")
const informacion = document.getElementById("info-modal")



// funcion para mostrar el modal
const mostrarModal = () => {
    modal.classList.remove("ocultar")
    titulo.textContent = "Dendrobium"
    informacion.textContent = "La Dendrobium es, después de Bulbophyllum, el segundo género más numeroso con 1200 especies de orquídeas epifitas de la subtribu Dendrobiinae de la familia Orchidaceae. Estas orquídeas poseen un gran tamaño siendo de las mayores de todas, y se encuentran en el Sureste de Asia en Indonesia, Filipinas y Papúa Nueva Guinea."
}

const mostrarModal2 = () => {
    modal.classList.remove("ocultar")
    titulo.textContent = "Helianthus"
    informacion.textContent = "Helianthus annuus, llamado comúnmente girasol, calom, jáquima, maravilla, mirasol, tlapololote o maíz de teja, es una planta herbácea anual de la familia de las asteráceas, originaria de América y cultivada como alimenticia, oleaginosa y ornamental en todo el mundo."
}

const mostrarModal3 = () => {
    modal.classList.remove("ocultar")
    titulo.textContent = "Ficus"
    informacion.textContent = "El género Ficus contiene alrededor de 900 taxones específicos e infra-específicos aceptados de árboles, arbustos y trepadoras de la familia Moraceae, tribu monogenérica Ficeae, oriundas de la zona intertropical, con algunas de ellas distribuidas por las regiones templadas."
}

const mostrarModal4 = () => {
    modal.classList.remove("ocultar")
    titulo.textContent = "Nyctocalos"
    informacion.textContent = "Nyctocalos es un género con siete especies de árboles pertenecientes a la familia Bignoniaceae."
}

const mostrarModal5 = () => {
    modal.classList.remove("ocultar")
    titulo.textContent = "Passiflora"
    informacion.textContent = "La Passiflora es una planta trepadora de rápido crecimiento conocida comúnmente como flores de la pasión. Su principal característica es la peculiar forma de sus flores y sus frutos comestibles."
}

const mostrarModal6 = () => {
    modal.classList.remove("ocultar")
    titulo.textContent = "Polianthes"
    informacion.textContent = "Llamada popularmente narciso, amole, nardo, tuberosa, azucena​ o vara de San José, es una planta perenne del género Agave, nativa originalmente del centro y sur de México."
}

// función para ocultar el modal
const cerrarModal = () => {
    modal.classList.add("ocultar")
}

// le indico que las funciones se ejecutan con el evento onclick
botonAbrirModal1.onclick = mostrarModal
botonAbrirModal2.onclick = mostrarModal2
botonAbrirModal3.onclick = mostrarModal3
botonAbrirModal4.onclick = mostrarModal4
botonAbrirModal5.onclick = mostrarModal5
botonAbrirModal6.onclick = mostrarModal6
botonCerrarModal.onclick = cerrarModal
