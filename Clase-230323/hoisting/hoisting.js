"use strict";

// Hoisting: Es una particularidad que consiste en que con independencia de donde esté declarada una varible en una función,
// esta es movida al inicio de la misma.

// function example() {
//   console.log(x);
//   var x = 10;
//   console.log(x);
// }

// console.log(x);
// let x = 0;

// function example() {
//   var x;
//   console.log(x);
//   x = 10;
//   console.log(x);
// }
// example();

var nombre = "Ricardo";

function saludar() {
  console.log(nombre);
  var nombre = "Jose";
  console.log(nombre);
}

saludar();
