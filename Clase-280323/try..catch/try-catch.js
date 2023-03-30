"use strict";

// try..catch: Es una estructura de control que nos permite manejar errores que puedan ocurrir durante la ejecución de un bloque de código.
// Se compone de dos bloques de código, que son el bloque try y el bloque catch.
// - Bloque try: Contiente el código que se quiere ejecutar y que se ejecuta de forma normal si no hay ningun tipo de error. Es el bloque donde
// tiene que encontrarse el posible error. Si hay un error en este bloque pasamos al bloque catch.
// - Bloque catch: Se utiliza para manejar el error que se produjo en bloque try. Dentro de este bloque se puede definir una variable que se utiliza
// para guardar la información sobre el error.

// try {
//     // Bloque de código que se intenta ejecutar
// } catch(error){
//     // Bloque de código que maneja el error.
// }
// const prompt = require("prompt-sync")();

// try {
//   noExiste();
// } catch (error) {
//   console.log("Se produjo el error: " + error.message);
// }

// throw new Error(message) -> Lanza un error con el mensaje que le pasamos como argumento.

// Ejemplo -> Como evitar que de error cuando el usuario no introduce un numero.

// Math.random -> 0 y 1
// 0.01  -> 1 - 0.99 -> 9.9
//

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio);
let numeroUsuario = -1;
let respuestaUsuario;
while (numeroUsuario !== numeroAleatorio) {
  try {
    respuestaUsuario = prompt("Adivina el número del 1 al 10");
    numeroUsuario = parseInt(respuestaUsuario);
    if (numeroUsuario === numeroAleatorio) {
      console.log("Acertaste");
    } else if (respuestaUsuario == "") {
      throw new Error("Debes introducir algo");
    } else {
      throw new Error("Fallaste");
    }
  } catch (error) {
    console.log(error.message);
  }
}
