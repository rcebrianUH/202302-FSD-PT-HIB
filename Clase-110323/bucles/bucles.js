const prompt = require("prompt-sync")();
// BUCLES -> permite repetir un bloque de código varias veces. El bucle se ejecuta
// mientras se cumpla
// una determinada condición, que puede ser una expresión booleana o una evaluación
// de una variable.

// FOR -> Se utiliza para iterar sobre una secuencia de valores.
// La inicialización se realiza antes de que el bucle comience, y
// generalmente se utiliza para declarar e inicializar una variable de
// control del bucle. La condición se comprueba antes de cada iteración del bucle,
// y si se evalúa como verdadera, se ejecuta el código dentro del bucle.
// La expresión final se ejecuta después de cada iteración del bucle y generalmente
// se utiliza para actualizar la variable de control del bucle.

// for (inicialización; condición; expresión final) {
// código a ejecutar en cada iteración
// }
for (let i = 0; i < 5; i++) {
  //   console.log(i);
}

let frutas = ["Naranjas", "Peras", "Mandarinas"];
let tipoFrutas = [
  { nombre: "Naranja", tipo: "Cítrico" },
  { nombre: "Peras", tipo: "Normal" },
  { nombre: "Mandarinas", tipo: "Cítrico" },
];
let citricos = [];

for (let i = 0; i < tipoFrutas.length; i++) {
  if (tipoFrutas[i].tipo == "Cítrico") {
    citricos.push(tipoFrutas[i].nombre);
  }
}

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// El bucle externo recorre las filas de la matriz, mientras que el bucle interno
// recorre las columnas de cada fila.

// En el bucle externo, utilizamos la variable i para indicar el índice de la fila
// actual de la matriz. La condición de finalización del bucle es i < matriz.length,
// que asegura que el bucle se ejecute para todas las filas de la matriz.

// En el bucle interno, utilizamos la variable j para indicar el índice de la columna
// actual de la matriz. La condición de finalización del bucle es j < matriz[i].length,
// que asegura que el bucle se ejecute para todas las columnas de la fila actual.

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}

frutas = ["Naranjas", "Peras", "Mandarinas", "Manzanas", "Piñas"]; // Un array con 5 elementos
// for..of -> forma de bucle que nos permite recorrer los elementos de objetos iterables,
// como son los arrays, los strings, los objetos Set, Map y otros objetos con propiedades
// iterables. El bucle for...of nos proporciona de forma automática cada valor de la
// iteración, en lugar del índice, lo que hace que su uso sea más sencillo y legible.
for (const fruta of frutas) {
  console.log(fruta);
}

for (const fila of matriz) {
  console.log(fila); // Cada vez que se ejecuta el bucle externo toma el valor de uno de los elementos (filas) de nuestro array.
  // En este punto fila es un array que es un objeto iterable
  for (const elemento of fila) {
    console.log(elemento);
  }
}

//for..in -> forma de bucle que nos permite recorrer las propiedades de un objeto.
// En cada iteración, el bucle devuelve el nombre de una propiedad del objeto.
// Por lo tanto, se utiliza para recorrer las claves o keys de un objeto.

// A diferencia del bucle for...of, el bucle for...in no se utiliza para recorrer
// los elementos de un array, ya que devuelve los índices en lugar de los valores.
// Para recorrer los elementos de un array, se recomienda utilizar el bucle for...of.
let superheroe = {
  nombre: "Peter Parker",
  pseudonimo: "spiderman",
  poder: "trepar muros",
};

for (const key in superheroe) {
  console.log("Este superheroe tiene como " + key + " " + superheroe[key]);
}

for (let i in frutas) {
  console.log(i);
}

// WHILE -> bucle que nos permite repetir una sección de código mientras
// una condición sea verdadera. La condición se evalúa antes de cada iteración
// del bucle, y si es verdadera, el código dentro del bucle se ejecuta.
// Si la condición es falsa, el bucle se detiene y la ejecución continúa con la
// siguiente instrucción después del bucle.
let cont = 0;
while (cont < 5) {
  console.log(cont);
  cont++;
}

// DO-WHILE -> Similar al while, pero la condición se evalúa al final del bloque de código,
// lo que garantiza que el código se ejecute al menos una vez.
i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

let respuesta;
do {
  respuesta = prompt("¿Quiere continuar en la ejecución?", "");
  if (respuesta == "Si") {
    quiereContinuar = true;
  } else {
    quiereContinuar = false;
  }
} while (quiereContinuar);
