const container = document.getElementById("container"); // Párrafo que muestra el número
const incrementTBt = document.getElementById("incrementTBt"); // Botón de incremento

let count = 0; // Variable para llevar el conteo

// Añadir evento al botón
incrementTBt.addEventListener("click", () => {
    count++; // Incrementar el contador
    container.textContent = count; // Actualizar el contenido del párrafo
});