const acordeones = document.querySelectorAll(".acordeon");

acordeones.forEach(function(acordeon) {

    acordeon.addEventListener("click", function() {

        const contenido = acordeon.nextElementSibling;

        document.querySelectorAll(".contenido-acordeon").forEach(function(item) {

            if (item !== contenido) {
                item.classList.remove("active");
            }

        });

        contenido.classList.toggle("active");

    });

});

