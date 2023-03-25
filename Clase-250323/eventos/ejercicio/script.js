const btn = document.getElementById("cambiaColor");
const input = document.getElementById("miInput");
const form = document.getElementById("miForm");

// EJERCICIO 1
btn.addEventListener(
  "click",
  () => (document.body.style.backgroundColor = "lightblue")
);

// EJERCICIO 2
input.addEventListener("keypress", (event) =>
  console.log("Tecla presionada: " + event.key)
);

// EJERCICIO 3
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const usuario = { nombre, email };
  console.log(usuario);
});
