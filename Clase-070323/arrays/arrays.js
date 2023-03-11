"use strict";

// Un método es una función que está asociada con un objeto o clase. Los métodos se
// definen en la definición del objeto o clase y
// se utilizan para realizar operaciones específicas en ese objeto o clase.

let persona = {
  nombre: "Ricardo",
  edad: "50",
  saludar: function () {
    console.log("Hola! Me llamo Ricardo");
  },
};

persona.saludar();

// Una clase es una plantilla que se utiliza para crear objetos que comparten
// las mismas propiedades y métodos. Una clase define la estructura y
// el comportamiento de un objeto, pero no crea directamente ese objeto.

// En JavaScript, un array es una estructura de datos que se utiliza para almacenar
// una colección de elementos.
// A diferencia de algunos otros lenguajes de programación, en JavaScript, los arrays
// pueden contener elementos de diferentes tipos de datos en una sola matriz.

// Los elementos en un array de JavaScript están indexados numéricamente y
// comienzan con un índice cero.
// Los elementos se pueden agregar, eliminar, modificar y acceder a ellos
// mediante su índice.
// Además, los arrays en JavaScript son dinámicos, lo que significa que
// pueden cambiar de tamaño en tiempo de ejecución.

// Además, JavaScript proporciona una variedad de métodos de array incorporados
// para manipular y trabajar con arrays,
// como pop(), shift(), unshift(), slice(), splice(), concat(), forEach(), map(),
// filter(), reduce(), entre otros.

let myArray = ["element1", "element2", "element3"];

// En JavaScript, un array es un tipo especial de objeto que se utiliza para almacenar
// una colección ordenada de valores,
// que se pueden acceder utilizando un índice numérico. Aunque a primera vista,
// esto puede parecer diferente de otros lenguajes
// de programación donde los arrays son considerados tipos de datos primitivos,
// hay varias razones por las que los arrays en JavaScript son objetos:

// 1. Un array en JavaScript puede contener cualquier tipo de datos, incluidos
// otros objetos, lo que no es posible con los tipos de datos primitivos.

// 2. Un array en JavaScript tiene propiedades y métodos predefinidos que
// se utilizan
// para trabajar con ellos, como length,
// pop(), push(), shift(), unshift(), splice(), concat(), entre otros.
// Estas propiedades y métodos son heredadas de la clase
// Array, que es una subclase de la clase Object en JavaScript.

// 3. Los arrays en JavaScript se pueden definir de dos formas diferentes:
// utilizando la sintaxis literal de array ([]) o utilizando
// el constructor Array(). Cuando se define un array con la sintaxis literal,
// el intérprete de JavaScript crea automáticamente un objeto
// de tipo Array y lo inicializa con los valores especificados. Por otro lado,
// cuando se utiliza el constructor Array(), se crea un objeto
// de tipo Array explícitamente.

// Los arrays son objetos iterables, lo que significa que se puede recorrer a
// través de una secuencia de elementos utilizando el for..of o el forEach.
//  Este protocolo se define utilizando el símbolo Symbol.iterator, que es
// un objeto que define un método next() que devuelve un objeto con
// dos propiedades: value y done.
// Objetos iterables: Arrays, Strings, Sets, Maps, NodeList, HTMLCollection,...

let arr = ["element1", "element2", "element3"];

let random = [1, "Hola mundo", true, persona];

let arrObj = [
  {
    nombre: "Juan",
    dorsal: 17,
    posicion: 1,
  },
  { nombre: "Juan", dorsal: 122, posicion: 2 },
  { nombre: "Juan", dorsal: 35, posicion: 3 },
];
// En JavaScript, un array puede tener elementos vacíos o sin definir (undefined) en él.
// puede ser útil en ciertos escenarios en los que se desea mantener una estructura de
// datos
// con un tamaño específico, pero sin necesidad de proporcionar valores para todos
// los elementos.

let lista = [1, 3, 4];
lista[10] = 5;

console.log(lista);

let paises = [
  "España",
  "México",
  "Francia",
  "Inglaterra",
  "Portugal",
  "Alemania",
];

let paisesEliminados = [];

// Propiedades de los arrays
console.log(paises.length);

// MÉTODO POP() -> Elimina el último elemento del array, devuelve el valor del elemento
// eliminado
// Si el array está vacío devuelve undefined. Modifica el array, no se puede deshacer.
paises.pop();

// MÉTODO PUSH() -> Añade un elemento o varios al final del array, devuelve la nueva
// longitud del array.
// [ 'España', 'México', 'Francia', 'Inglaterra', 'Portugal' ]
paises.push("Colombia", "Argentina");

// MÉTODO SHIFT() -> Elimina el primer elemento del array. Devuelve el elemento eliminado
// [ 'España', 'México', 'Francia', 'Inglaterra', 'Portugal', 'Colombia', 'Argentina' ]
paises.shift();

// MÉTODO UNSHIFT()  -> Inserta al principio uno o varios elementos. Devuelve nueva longitud
// [ 'México', 'Francia', 'Inglaterra', 'Portugal', 'Colombia', 'Argentina' ]
paises.unshift("China");

// MÉTODO REVERSE() -> Permite invertir el orden de los elementos. Devuelve el array invertido.
// ['China', 'México', 'Francia', 'Inglaterra', 'Portugal', 'Colombia', 'Argentina' ]
paises.reverse();

// MÉTODO SORT() ->  es utilizado para ordenar los elementos de un array en su lugar,
// es decir, modifica el array original.
// El ordenamiento se realiza en base a la comparación de los elementos del array
// utilizando una función de comparación.
// Si no hay nada dentro del sort, se hace de manera alfabética.
// La función de comparación debe devolver un valor negativo si el primer argumento es
// menor que el segundo,
// un valor positivo si el primer argumento es mayor que el segundo, o cero si ambos
// argumentos son iguales.
// La función de comparación puede tomar dos argumentos que son los elementos del
// array que se están comparando.

let numeros = [1, 25, 3, 40, 5, 16, 7, 8, 19];

paises.sort();

let numbers = [5, 2, 8, 1, 4];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 4, 5, 8]

paises.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
// [ 'Argentina',   'China',   'Colombia',    'Francia',    'Inglaterra',    'México',    'Portugal']

// MÉTODO SPLICE() -> Depende del número de elementos que le pasemos. El método "splice"
// es una función incorporada en JavaScript que
// se utiliza para cambiar el contenido de una matriz o array.
// Este método puede eliminar o agregar elementos a una matriz, o incluso ambos al mismo
// tiempo.
// - El primer argumento es el índice de la matriz donde se desea comenzar a modificar
//   la matriz.
// - El segundo argumento es el número de elementos que se desea eliminar o sustituir
//   a partir del índice indicado.
//   Si se establece este segundo argumento en cero, no se eliminará ningún elemento.
// - El tercer argumento y todos los argumentos posteriores son elementos que se
//   insertarán en la matriz,
//   comenzando en el índice indicado en el primer argumento. Si no se especifican
//   argumentos adicionales,
//   se eliminarán solo los elementos especificados en el segundo argumento.
// - Si se establece en el segundo argumento más elementos que los que hay en el array,
//   se borrarán hasta el final.
paises.splice(1, 1, "España");

///////////////////////////////////////////////
// let aux = ["Japón", "Corea"];

// [ 'Argentina',   'España',   'Colombia',    'Francia',    'Inglaterra',    'México',    'Portugal']
// MÉTODO CONCAT() -> Sirve para fusionar varios arrays. No modifica ninguno de los arrays.
let aux = paises.concat(["Japón", "Corea"], ["Turquía"]);

// Paises = [ 'Argentina',   'España',   'Colombia',    'Francia',    'Inglaterra',    'México',    'Portugal']
// MÉTODO JOIN() -> Devuelve una cadena con los elementos separados por defecto por comas. Le podemos indicar el separador como argumento
paises.join();

// MÉTODO SLICE -> Devuelve una sección específica del array sin modificarlo.
// El primer parámetro es obligatorio, y es el indice desde donde se empieza a contar incluido.
// El segundo parámetro es indice hasta el que se devuelven los elementos OPCIONAL

paises.slice(-3);

// MÉTODO TOSTRING() -> Similar a join(), sólo que no admite parámetros, y que el
// resultado es un objeto String,
// con sus propias propiedades y métodos.

let bin = [1, 0, 0, 1, 0];

// INDEXOF -> Devuelve el índice del primer elemento que coincide con el parámetro proporcionado. Si no encuentra devuelve -1
bin.indexOf(0);

// let aux = bin.indexOf(1) -> 0
// bin.splice(aux, 1)
// bin.splice(bin.indexOf(1), 1);

// LASTINDEXOF -> Devuelve el índice del último elemento que coincide con el parámetro proporcionado. Si no encuentra devuelve -1

bin.lastIndexOf(0, 3);

// INCLUDES() -> devuelve true si se contiene un elemento.
console.log(bin.includes(1));

// ARRAYS BIDIMENSIONALES -> Estructuras de datos en la que los elementos están
// organizados en filas y columnas.
// - El primer indice representa una fila y el segundo la columna.
// Se usan mucho en bases de datos, tablas de excel, mapas de bits
let matriz = [
  [1, 5, 7, 5],
  [2, 3, 4, 1],
  [5, 1, 3, 2],
];

// let matrizB = [1, 2, 3];
// matrizB[matrizB.length - 1];

// aux = matriz[matriz.length - 1];
// let final = aux[aux.length - 1];

// matriz[matriz.length - 1][matriz[matriz.length - 1].length - 1]; // matriz y su longitud es 3, busca el indice que es uno menos que la longitud

// matriz[0][1]

// console.log("La última fila es: " + aux);

// console.log("El último número es: " + final);

// console.log(matriz[1][1]);

console.log(matriz.slice(-1)[0].slice(-1)[0]);

// ARRAYS ANIDADOS -> Arrays dentro de arrays dentro de arrays...
let tridimensional = [
  [
    [2, 3],
    [3, 2],
  ],
  [
    [1, 1],
    [5, 4],
  ],
];
console.log(tridimensional[1][0][1]);
