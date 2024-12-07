document.addEventListener("DOMContentLoaded", () => {
  let formulario = document.querySelector(".formulario");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    console.log("nombre: " + nombre);
    console.log("email: " + email);
    console.log("mensaje: " + mensaje);
    alert("nombre; " + nombre + "\nemail: " + email + "\nmensaje: " + mensaje);
  });
});
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
