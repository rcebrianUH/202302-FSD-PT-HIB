// Seleccionar todas las imágenes de los destinos turísticos y cambia su tamaño.
const images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  //   images[i].style.width = "30px";
  images[i].setAttribute("style", "height: 100px");
}

// Añadir un nuevo elemento hijo a una de las tarjetas de destino turístico.
const cards = document.querySelectorAll(".tarjeta");
const peruCard = cards[1];
const myUl = document.createElement("ul");
peruCard.appendChild(myUl);
const myLi = document.createElement("li");
myLi.textContent = "Bueno, bonito y barato";
myUl.appendChild(myLi);

// Crear un nodo de texto y añadirlo como hijo de una de las
// tarjetas de destino turístico.
let newP = document.createElement("p");
let textContent = document.createTextNode("Me gustan las ciudadelas");
newP.appendChild(textContent);
peruCard.appendChild(newP);

// Obtener el padre de un elemento específico y cambiar su estilo.
let parent = peruCard.parentNode;
parent.style.border = "2px solid red";

// Eliminar un nodo hijo específico de una de las tarjetas de destino turístico.
let enlacePeru;
for (let child of peruCard.children) {
  child.tagName == "A" ? (enlacePeru = child) : false;
}

peruCard.removeChild(enlacePeru);

// Seleccionar todos los elementos de una etiqueta específica (por ejemplo, todos los párrafos) y cambiar su estilo.
let parrafos = document.querySelectorAll("p");
for (let parrafo of parrafos) {
  parrafo.style.color = "#bf1525";
}

// Acceder a los nodos hermanos de un elemento específico y modificar su contenido.
// console.log(peruCard.parentNode.children);
for (let card of peruCard.parentNode.children) {
  if (card != peruCard) card.style.backgroundColor = "grey";
}

console.log(document.getElementById("lago").previousElementSibling);
console.log(peruCard.previousElementSibling);

const hasPreviousSibling = (elem) => {
  if (elem.previousElementSibling == null) {
    elem.innerHTML += "<p>Se ha modificado</p>";
    return true;
  }
  return false;
};

let hasNextSibling;
let actualElem = peruCard;

while (hasPreviousSibling(actualElem)) {
  actualElem = actualElem.previousSibling;
}

// Crear un nuevo atributo y añadirlo a una de las tarjetas de destino turístico.

peruCard.setAttribute("title", "peru");

// Obtener el valor de un atributo específico en una de las tarjetas de destino turístico.
console.log(peruCard.getAttribute("title"));

// Agregar una clase a una tarjeta de destino turístico.
let color = "rgb(0,0,0,0.2)";
document.head.innerHTML += `<style> .tarjeta-destacada {
    background-color: ${color}
}</style>`;
peruCard.classList.add("tarjeta-destacada");

// Crear un mensaje de bienvenida en la página de destino turístico.

// Obtener el nombre del nodo raíz del documento HTML (que debería ser "HTML").

// Acceder al primer hijo de la lista de tarjetas de destino turístico.

// Obtener el valor de un nodo de texto dentro de una de las tarjetas de destino turístico.

// Cambiar el color de fondo de una de las tarjetas de destino turístico.
