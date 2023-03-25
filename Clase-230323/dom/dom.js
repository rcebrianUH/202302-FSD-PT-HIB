console.log("Empieza");
// El DOM es una representación de un archivo HTML como un árbol de nodos jerárquico que permite que el HTML sea fácilmente manipulable.

// El DOM define una serie de objetos, métodos, propiedades.

// Objetos:
// - HTMLCollection: objeto de JS que representa una coleccion de elementos HTML.
// - NodeList: A diferencia de HTMLCollection, puede contener además de elementos HTML -> atributos, nodos de texto, nodos de comentario...

// BÚSQUEDA //
// getElementById(id): Devolver el elemento con un id específico
let divContenedor$$ = document.getElementById("contenedor");
// console.log(divContenedor$$);

// getElementsByName(name): Devolver los elementos con un name especifico
let parrafo$$ = document.getElementsByName("parrafo");
// console.log(parrafo$$);

// getElementsByTagName(tagname): Devuelve todos los elementos con un nombre de tag específico
let pTag$$ = document.getElementsByTagName("p");
// console.log(pTag$$);

// getElementsByClassName(classname): Devolver los elementos con un nombre de clase específico
let estilo$$ = document.getElementsByClassName("estilo");
// console.log(estilo$$);
// console.log(estilo$$[1]);

// // getAttribute(attributeName): Devolver el valor del atributo con nombre attributeName

// console.log(estilo$$[1].getAttribute("class"));
// console.log(estilo$$[1].getAttribute("id"));

// // querySelector(selector): Devuelve un único elemento que corresponde con el selector, ya sea por id, por tag o por clase
// console.log(document.querySelector("#example"));
// console.log(document.querySelector(".estilo"));
// console.log(document.querySelector("p"));

// //querySelectorAll(selector): Devolver un array con los elementos que corresponden con el selector, ya sea por id, por tag o por clase
// console.log(document.querySelectorAll(".estilo"));

// MANIPULACIÓN //

// createElement(name): Crea un elemento HTML con el nombre que le pasemos como parámetro.
let newDiv = document.createElement("div");
// console.log(newDiv);

// createTextNode(text): Crea un nodo de texto que puede ser añadido a un elemento HTML
let textContent = document.createTextNode("Hola mundo!");
console.log(textContent);

// appendChild(node): Nos permite hacer hijo un elemento a otro
newDiv.appendChild(textContent);
// console.log(newDiv);
divContenedor$$.appendChild(newDiv);

// console.log(estilo$$[1]);
// insertBefore(new, target): Método de los elementos HTML que permite insertar un elemento nuevo antes de un determinado elemento
// hijo del elemento que llama al método.
// divContenedor$$.insertBefore(newDiv, divContenedor$$.children[0]);
// divContenedor$$.insertBefore(newDiv, estilo$$[0]);

// removeAttribute(attribute): Nos permite eliminar el atributo con el nombre attribute del nodo desde el que invocamos el método.
estilo$$[0].removeAttribute("id");
// console.log(estilo$$[0]);

// removeChild(child): Eliminar el nodo hijo que se indica con child

divContenedor$$.removeChild(divContenedor$$.children[1]);

// for (let i = divContenedor$$.children.length - 1; i >= 0; i--) {
//   divContenedor$$.removeChild(divContenedor$$.children[i]);
// }

// remove(): elimina un nodo y su descendencia
// divContenedor$$.remove();
// console.log(estilo$$[0]);

// replaceChild(new, old): Reemplazar un nodo por otro que se indica
// divContenedor$$.replaceChild(newDiv, divContenedor$$.children[0]);

// setAttribute(): Añade un nuevo atributo a un elemento HTML. Le pasamos como primer argumento el nombre del atributo y como segundo el valor
newDiv.setAttribute("id", "nuevo");

// getAttribute()
console.log(newDiv.getAttribute("id"));
