
/* Funcionamiento del menu hamburguesa */

const boton = document.getElementById("Menu-pequeño");/* Guarda el boton con id Menu-pequeño dentro de una variable llamada boton*/
const menu = document.getElementById("Principales"); /*Guarda el menu con id Principales dentro de una variable llamada menu */

boton.addEventListener("click", function () {
    menu.classList.toggle("activo");
});



/* Funcionamiento del carrusel */

const targetas = document.querySelector(".targetas");
const slides = document.querySelectorAll(".slide");

let indice = 0;

function mostrarTargetas() {

    targetas.style.transform = `translateX(-${indice * 100}%)`;

}

function siguienteTargeta() {

    if (indice < slides.length - 1) {

        indice++;

    } else {

        indice = 0;

    }

    mostrarTargetas();

}

function anteriorTargeta() {

    if (indice > 0) {

        indice--;

    } else {
        indice = slides.length - 1;
    }
    mostrarTargetas();

}



/* Funcionamiento del Modal  */

 function abrirModalBoleto(){
    document.getElementById('modal-boleto').style.display="flex";
    document.body.style.overflow = "hidden";
 
    actualizarHorarios();
}

function cerrarModalBoleto(){
    document.getElementById('modal-boleto').style.display="none";
    document.body.style.overflow = "auto";
}


/*Funcionamiento del modal-codigo reutilizado */

function abrirModal(video){
    document.getElementById("modal").style.display = "flex";
    document.getElementById("trailer").src = video;

}

function cerrarModal(){
    document.getElementById("modal").style.display = "none";
    document.getElementById("trailer").src = "";
}


/*Funcionamiento del select para el boleto*/

const formato = document.getElementById("formato");
const idioma = document.getElementById("idioma");
const horario = document.getElementById("horario");
const precio = document.getElementById("precio");

const horarios = {
    "2D": {
        "doblada": ["15:00 hs", "16:10 hs", "17:15 hs"],
        "subtitulada": ["18:00 hs", "20:00 hs"]
    },

    "3D": {
        "doblada": ["17:30 hs"],
        "subtitulada": ["18:30 hs", "20:00 hs"]
    },

    "PREMIER": {
        "doblada": ["21:00 hs"],
        "subtitulada": ["22:00 hs"]
    }
 
};

const precios = {
    "2D": {
        "doblada": "35.000 Gs",
        "subtitulada": "40.000 Gs"
    },

    "3D": {
        "doblada": "50.000 Gs",
        "subtitulada": "60.000 Gs"
    },

    "PREMIER": {
        "doblada": "70.000 Gs",
        "subtitulada": "80.000 Gs"
    }
};

function actualizarHorarios() {
    const formatoSeleccionado = formato.value;
    const idiomaSeleccionado = idioma.value;

    horario.innerHTML = "";

    const listaHorarios = horarios[formatoSeleccionado][idiomaSeleccionado];

    listaHorarios.forEach(function(hora) {

        const opcion = document.createElement("option");

        opcion.value = hora;
        opcion.textContent = hora;

        horario.appendChild(opcion);

    });

}

if (formato && idioma && horario) {
    formato.addEventListener("change", actualizarHorarios);
    idioma.addEventListener("change", actualizarHorarios);

    actualizarHorarios();
}


function actualizarPrecio() {

    const formatoSeleccionado = formato.value;
    const idiomaSeleccionado = idioma.value;

    const precioSeleccionado = precios[formatoSeleccionado][idiomaSeleccionado];

    precio.textContent = precioSeleccionado;

}

if (formato && idioma && precio) {

    formato.addEventListener("change", actualizarPrecio);
    idioma.addEventListener("change", actualizarPrecio);

    actualizarPrecio();

}


/*Confirmación de compra */
function comprarBoleto() {
    alert("¡Compra realizada con éxito!");
    cerrarModalBoleto();
}



function enviarCorreo(){

    let urgenciaSeleccionada =
        document.querySelector('input[name="urgencia"]:checked');

    let parametros = {

        nombre: document.getElementById("nombre").value,

        correo: document.getElementById("correo").value,

        tipo: document.getElementById("tipo").value,

        urgencia: urgenciaSeleccionada ?
                   urgenciaSeleccionada.value :
                   "No especificada",

        mensaje: document.getElementById("mensaje").value
    };

    emailjs.send(
        "service_6r2yq2e",
        "template_6j7pi5o",
        parametros
    )

    .then(function(){

        alert("Mensaje enviado correctamente");

    })

    .catch(function(error){

        alert("Error al enviar");

        console.log(error);

    });
}




 
/*Funcionamiento del modal-codigo reutilizado para que las fotos de la galeria */

function abrirGaleria(imagen, descripcion) {

    const modalGaleria = document.getElementById("modalGaleria");
    const imagenGrande = document.getElementById("imagenGrande");
    const descripcionImagen = document.getElementById("descripcionImagen");

    imagenGrande.src = imagen;
    descripcionImagen.textContent = descripcion;

    modalGaleria.style.display = "flex";
}

function cerrarGaleria() {

    const modalGaleria = document.getElementById("modalGaleria");

    modalGaleria.style.display = "none";
}


/*Modal para comidas */

function abrirModalComida(nombre, imagen, descripcion, precio){
       document.getElementById("modal-combo").style.display = "flex";

       document.getElementById("nombreComida").textContent = nombre;

        document.getElementById("imagenComida").src = imagen;

        document.getElementById("descripcionComida").textContent = descripcion;

        document.getElementById("precioComida").textContent = "Precio: Gs. " + precio;
}

function cerrarModalComida(){

    document.getElementById("modal-combo").style.display = "none";

}

function comprarComida(){

    alert("¡Compra realizada exitosamente!");

    cerrarModalComida();

}

/*Banner imagen modal*/ 

function abrirModalBanner(){
    document.getElementById("modal").style.display = "flex";
}

function cerrarModalBanner(){
    document.getElementById("modal").style.display = "none";
}

