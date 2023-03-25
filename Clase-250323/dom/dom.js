// PROPIEDADES DE LOS NODOS.

// -attributes: Nos va a devolver un objeto con todos los atributos que posee un nodo.
const tarjetaLago$$ = document.querySelector(".tarjeta");
const imgLago$$ = tarjetaLago$$.querySelector("img");
const attrImgLago = imgLago$$.attributes;

// console.log(tarjetaLago$$);
// console.log(imgLago$$);
// console.log(attrImgLago);

// for (let i = 0; i < attrImgLago.length; i++) {
//   console.log(attrImgLago[i].name + ": " + attrImgLago[i].value);
// }

// className: Permite asignar o devolver el nombre de la clase que tenga el nodo que lo invoca
// console.log(tarjetaLago$$.className);
// tarjetaLago$$.className = "tarjeta-destacada";
// console.log(tarjetaLago$$.className);

// classList: Listado de clases que tiene un nodo.
// A diferencia de className, proporciona métodos para agregar, para verificar y para eliminar la presencia de clases.
// Para agregar tenemos add(claseAñadir)
// Para eliminar tenemos remove(claseEliminar)
// Para verificar si un nodo tiene una clase o no, utilizamos contains(nombreClase) que nos devuelve true o false
// nodeName: Devuelve el nombre de un nodo HTML

const containsClass = (nodo, className) => {
  //   nodo.classList.contains(className)
  //     ? console.log(`El elemento ${nodo.nodeName} tiene la clase ${className}`)
  //     : console.log(
  //         `El elemento ${nodo.nodeName} no tiene la clase ${className}`
  //       );
};

tarjetaLago$$.classList.add("tarjeta-destacada");
// tarjetaLago$$.classList.contains("tarjeta-destacada")
containsClass(tarjetaLago$$, "tarjeta-destacada");

tarjetaLago$$.classList.remove("tarjeta-destacada");
// tarjetaLago$$.classList.contains("tarjeta-destacada")
containsClass(tarjetaLago$$, "tarjeta-destacada");

// - id: Nos devuelve el valor del atributo id.
// console.log(tarjetaLago$$.id);
// tarjetaLago$$.id = "lago-como";

// console.log(tarjetaLago$$.id);

// - innerHTML: La propiedad innerHTML es utilizada para obtener o o establecer el contenido de un elemento HTML.
// console.log(tarjetaLago$$.innerHTML);

const parrafoLago$$ = tarjetaLago$$.querySelector("p");
parrafoLago$$.innerHTML +=
  "<span style='color: red'> Hemos añadido contenido.</span>";

// - nodeName: Devuelve el nombre del nodo, por ejemplo si estamos en un <div> devolverá DIV, en un <img> IMG,....
// La diferencia con tagName, es que tagName solo está disponible en los elementos HTML, y nodeName está disponible en todos los nodos incluyendo
// comentarios, texto, elemntos HTML,...
// firstChild: Es una propiedad que nos devuelve el primer nodo hijo del elemento que lo llama.
// children[0]: children nos devuelve una lista de elementos HTML, mientras que firstChild cualquier tipo de nodo.

// console.log(parrafoLago$$.children[0]);
// console.log(parrafoLago$$.firstChild)

// console.log(parrafoLago$$.nodeName);

// console.log(parrafoLago$$.firstChild.nodeName);
// console.log(parrafoLago$$.firstChild.tagName);

// - nodeValue: Devolver el valor del nodo. Si es de tipo element, devolverá null.
// console.log(parrafoLago$$.firstChild.nodeValue);
// console.log(parrafoLago$$.nodeValue);

// let colorLago;
// window.prompt("Dime el color que quieres utilizar", colorLago);

// - style: Permite insertar código CSS para editar el estilo de un elemento

// tarjetaLago$$.style.backgroundColor = colorLago;
console.log(tarjetaLago$$.style);
tarjetaLago$$.style.border = "2px solid red";
tarjetaLago$$.style.cursor = "pointer";

// textContent: Obtiene o inserta texto en un elemento.
// console.log(parrafoLago$$.textContent);
// console.log(tarjetaLago$$.textContent);

// childNodes: Devuelve un array con los nodos hijos del nodo desde el que se le llama.
// console.log(tarjetaLago$$.childNodes);

// firsElementChild: Devuelve el primer elemento hijo
// lastElementChild: Devuelve el último hijo.
console.log(tarjetaLago$$.lastChild);
console.log(tarjetaLago$$.lastElementChild);

// - previousSibling: Nos devuelve el elemento hermano anterior
// - nextSibling: Nos devuelve el elemento hermano posterior
console.log(parrafoLago$$.previousElementSibling);
console.log(parrafoLago$$.nextElementSibling);

// - ownerDocument: Devuelve el nodo raíz donde se encuentra el nodo desde el que se llama
console.log(tarjetaLago$$.ownerDocument);

// - parentNode: Devuelve el nodo padre del elemento desde el que se llama
console.log(tarjetaLago$$.parentNode);

let color = "#bf1525";

document.head.innerHTML += `<style> .tarjeta-destacada {
    background-color: ${color}
}</style>`;

tarjetaLago$$.classList.add("tarjeta-destacada");
