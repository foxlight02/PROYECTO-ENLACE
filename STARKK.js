 document.getElementById("linkContacto").addEventListener("click", (e) => {
    e.preventDefault(); // 🚫 evita navegación
    console.log("Click interceptado");
});



// Selecciona TODOS los elementos que tengan la clase "link"
document.querySelectorAll(".link").forEach(link => {

    // A cada enlace le agrega un evento cuando se hace clic
    link.addEventListener("click", e => {

        // Evita el comportamiento normal del <a>
        // (o sea, que el navegador cargue otra página)
        e.preventDefault();

        // Obtiene la URL guardada en el atributo data-url del enlace
        // Ejemplo en HTML: <a class="link" data-url="acerca.html">Acerca</a>
        const url = link.dataset.url;

        // Hace una petición HTTP a esa URL sin recargar la página
        fetch(url)

            // Convierte la respuesta del servidor en texto (HTML)
            .then(res => res.text())

            // Recibe el HTML y lo procesa
            .then(html => {

                // Inserta el contenido HTML recibido
                // dentro del elemento <main> de la página actual
                document.querySelector("main").innerHTML = html;
            });
    });
});