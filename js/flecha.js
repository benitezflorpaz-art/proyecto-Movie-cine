const btnSubir = document.getElementById("btnSubir");

// Mostrar el botón cuando el usuario baja
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        btnSubir.style.display = "block";
    } else {
        btnSubir.style.display = "none";
    }

});

// Subir suavemente al hacer clic
btnSubir.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});