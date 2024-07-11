function botonMenu() {
  const botonAbrirEl = document.querySelector(".button-menu");
  const botonCerrarEl = document.querySelector(".boton-oculto");
  const ventanaOculta = document.querySelector(".menu-palabras-ocultas");

  botonAbrirEl.addEventListener("click", () => {
    ventanaOculta.style.display = "flex";
  });
  botonCerrarEl.addEventListener("click", () => {
    ventanaOculta.style.display = "none";
  });
}
function enviarFormulario(body) {
  // Definir la URL del request
  const url = "https://apx-api.vercel.app/api/utils/dwf";

  // Realizar el request fetch
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((data) => {
    console.log("Success:", data); // Maneja la respuesta exitosa aquí
    alert("Mensaje enviado con éxito!");
  });
}
function botonMenu() {
  const botonAbrirEl = document.querySelector(".button-menu");
  const botonCerrarEl = document.querySelector(".boton-oculto");
  const ventanaOculta = document.querySelector(".menu-palabras-ocultas");

  botonAbrirEl.addEventListener("click", () => {
    ventanaOculta.style.display = "flex";
  });
  botonCerrarEl.addEventListener("click", () => {
    ventanaOculta.style.display = "none";
  });
}
function main() {
  botonMenu();
  document
    .getElementById("boton-enviar")
    .addEventListener("click", function (event) {
      // Prevenir el envío del formulario por defecto
      event.preventDefault();

      // Capturar los valores de los campos del formulario
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const body = {
        to: "agustin.cabrerafernandez@gmail.com",
        message: `Nombre: ${name}<br>Emisor: ${email}<br>Mensaje: ${message}`,
      };
      enviarFormulario(body);
    });
}
main();
