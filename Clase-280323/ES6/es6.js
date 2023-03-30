"use strict";

// ES6 (también conocido como ECMAScript 2015) es una versión importante
// de la especificación de JavaScript que se lanzó en 2015. Incluye
// muchas nuevas características y mejoras en el lenguaje que hacen que
// sea más fácil y poderoso escribir código en JavaScript.

// Desestructuración: La desestructuración es una característica que
// permite extraer valores de objetos y matrices de una manera más concisa y legible.
// la desestructuración nos permite acceder a los valores de un objeto o matriz y
// asignarlos a variables separadas sin tener que acceder a ellos de forma individual.

// En este ejemplo, creamos un objeto llamado persona con tres propiedades: nombre, edad y profesion.
// Luego, utilizamos la sintaxis de desestructuración para extraer los valores de estas propiedades
// y asignarlos a variables separadas.

const persona = {
  nombre: "Ricardo",
  edad: 50,
  profesion: "Panadero",
};

// const nombre = persona.nombre
// const edad = persona.edad
// ...

// const { nombre, edad, profesion } = persona;

// console.log(nombre);

// Ejemplo matrices

const numeros = [1, 2, 3, 4, 5, 6, 7];

const [
  primerNumero,
  segundoNumero,
  tercerNumero,
  ,
  quintoNumero,
  ...restoNumeros
] = numeros;

// const [, , , , quinto, ...resto] = numeros;
const [fifth, sixth, ...resto] = numeros.slice(4);

// console.log(fifth);
// console.log(sixth);
// console.log(resto);

// console.log(primerNumero);
// console.log(restoNumeros);
// console.log(quintoNumero);

// Funciones con múltiples parámetros: Si tenemos una función con múltiples parámetros y algunos son opcionales,
// podemos utilizar la desestructuración para asegurar valores por defecto.

// function configurarOpciones(color, tamaño, tipo) {
//   console.log(color);
//   console.log(tamaño);
//   console.log(tipo);
// }

function configurarOpciones({
  color = "blanco",
  tamaño = "mediano",
  tipo = "redondo",
}) {
  //   console.log(color);
  //   console.log(tamaño);
  //   console.log(tipo);
}

configurarOpciones({ color: "rojo", tipo: "cuadrado" });

// El spread operator en JavaScript es un operador que se utiliza para descomponer los
// elementos de un objeto iterable (como una matriz, una cadena de texto, un objeto) en
// elementos individuales. La sintaxis del spread operator es el uso de tres puntos consecutivos (...)
// seguidos del objeto iterable que deseamos descomponer.

const numeros2 = [100, 101, 102, 103, 104];
const numeros3 = [20, 30, 40];

// console.log(...numeros);

// Unir matrices: podemos unir dos o más matrices en una sola

const numerosUnidos = [...numeros, ...numeros2, ...numeros3];
// console.log(numerosUnidos);

// Pasar argumentos de un función

function sumarNumeros(a, b, c) {
  return a + b + c;
}

const trio = [1, 2, 3];

// console.log(sumarNumeros(...trio));

// Clonar objetos: Podemos usar el spread operator para crear una copia de un objeto
const objOri = { nombre: "Juan", edad: "30" };
const propiedadesPersona = { sueldo: "1000", pelo: "Rubio" };
const objCopia = { ...objOri, profesion: "Agricultor", ...propiedadesPersona };

// console.log([...numeros].reverse());
// console.log([...numeros].sort());

const matriz = [...numeros, 8];
// console.log(numeros);

let characters = [..."Ricardo"];
console.log(characters);

// console.log(objCopia);

const { nombre, ...restoDePropiedades } = objCopia;

// console.log(restoDePropiedades);

// La sintaxis import / export se utiliza para importar y exportar módulos en una
// aplicación.
// Un módulo es un archivo o una colección de archivos que exportan una o más variables,
// funciones o clases y se pueden importar en otros archivos para su uso.

// Con export, podemos hacer que nuestras variables, funciones o clases sean accesibles
// desde fuera
// del archivo en el que se definen. Con import, podemos utilizar los valores exportados
// de un módulo en otro archivo.

import { PI, dividir } from "./export.js";

console.log(PI);
console.log(dividir(6, 2));
