// Los eventos son acciones que ocurren en la página web, como hacer click en un botón, mover el ratón, hacer scroll, cargar una página...
// Cuando se produce un evento, se activa automáticamente cualquier función que haya sido registrada para ese evento.

function onCardCaballo() {
  alert("Has pulsado sobra la tarjeta del caballo");
}

function onScroll() {
  document.querySelector(".container").style.backgroundColor = "red";
}

// addEventListener: Es un método del DOM que se utiliza para registrar una función como manejadora de eventos de un elemento HTML.
// elementoHTML.addEventListener(palabraClaveEvento, funcion);

const cardGallina = document.getElementById("gallina");

cardGallina.addEventListener("click", () =>
  alert("Has pulsado sobra la tarjeta de la gallina")
);

// EVENTOS DEL RATÓN
// - click: Botón izquierdo del ratón.
// - mouseover: Pasar el ratón sobre un elemento.
// - mouseout: Sacar el ratón de un elemento.

// EVENTOS DEL TECLADO
// keypress: pulsar una tecla
// keyup: soltar una tecla
// input: leer a tiempo real lo que se está escribiendo en un input

document.addEventListener("keypress", function (event) {
  switch (event.key) {
    case "i":
      //   alert("Nuestra granja está en Villaverde");
      console.log("Se ha pulsado la i");
      setTimeout(() => console.log("Me he ejecutado tras 6 segundos"), 6000);
      break;
    case "v":
      document.getElementById("vaca").style.backgroundColor = "red";
      document.getElementById("caballo").style.backgroundColor = "white";
      document.getElementById("gallina").style.backgroundColor = "white";
      break;
    case "c":
      document.getElementById("vaca").style.backgroundColor = "white";
      document.getElementById("caballo").style.backgroundColor = "red";
      document.getElementById("gallina").style.backgroundColor = "white";
      break;
    case "g":
      document.getElementById("vaca").style.backgroundColor = "white";
      document.getElementById("caballo").style.backgroundColor = "white";
      document.getElementById("gallina").style.backgroundColor = "red";
      break;
  }
});

// document.addEventListener("keyup", function (event) {
//   console.log(event);
//   console.log("Se ha soltado la tecla " + event.key);
// });

var nombre = document.querySelectorAll("input")[0];
// nombre.addEventListener("input", (event) => console.log(event.target.value));

// EVENTOS SOBRE ELEMENTOS
// - focus: poner el foco sobre un elemento, por ejemplo un input
// - blur: quitar el foco de un elemento
// - change: al cambiar el contenido de un input (hay que quitar el foco para que se considere un cambio)

var email = document.querySelectorAll("input")[1];

// email.addEventListener("focus", (event) =>
//   console.log(
//     `Se ha hecho focus sobre el elemento con id ${event.srcElement.id}, su valor antes de cambiar es ${event.target.value}`
//   )
// );

// email.addEventListener("blur", (event) =>
//   console.log("Se ha hecho blur sobre el elemento")
// );

// email.addEventListener("change", (event) =>
//   console.log(
//     `Se ha hecho un cambio sobre el elemento con id ${event.srcElement.id}, ahora es ${event.target.value}`
//   )
// );

var edad = document.querySelector("select");

// edad.addEventListener("focus", (event) =>
// //   console.log(
// //     `Se ha hecho blur sobre el elemento con id ${event.srcElement.id}, la opción es ${event.target.value}`
// //   )
// );

// edad.addEventListener("change", (event) =>
// //   console.log(
// //     `Se ha hecho un cambio sobre el elemento con id ${event.srcElement.id}, ahora es ${event.target.value}`
// //   )
// );

// FORMULARIOS
// - submit: pulsar el botón submit del formulario
// - reset: pulsar u el botón de reset del formulario

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const edad = document.getElementById("edad").value;
  const user = { nombre, email, edad };
  console.log(user);
});

form.addEventListener(
  "reset",
  () => (form.innerHTML += "<p>Reseteaste el formulario</p>")
);

// VENTANA //

// - resize: se ha cambiado el tamaño de la ventana.
// - scroll: se ha hecho scroll en la ventana o en un elemento.

window.addEventListener("resize", function () {
  console.log("La ventana ha cambiado de tamaño.");
});
