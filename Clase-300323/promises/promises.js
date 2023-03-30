// Una promesa o promise es un objeto que representa la terminación o el fallo de una operación asíncrona.

// Las promesas se consumen mediante 'then' y 'catch'

// El then es usado para manejar el resultado exitoso de una Promise (es decir cuando es resuelta). Este then toma como argumento una función de callback,
// que se ejecutará una vez que la promise sea resuelta.

let tiempoEspera = Math.random() * 3000;

function sumar(a, b) {
  const promesa = new Promise((acepta, rechaza) => {
    if (!a || !b) {
      rechaza("Tienes que mandar los dos numeros");
    } else {
      setTimeout(() => acepta(a + b), tiempoEspera);
    }
  });
  return promesa;
}

let result;

sumar(3, null)
  .then((loQueSaleDelAcepta) => {
    result = loQueSaleDelAcepta;
    console.log("Resultado asincronía: " + result);
  })
  .catch((loQueSaleDeRechaza) => {
    throw new Error(loQueSaleDeRechaza);
  });

console.log("Resultado sin asincronía: " + result);

// //

const addItem = (item, list) => {
  const promise = new Promise((resolve, reject) => {
    if (!list) {
      reject("No existe la lista");
    } else {
      setTimeout(function () {
        list.push(item);
        resolve(list);
      }, 2000);
    }
  });
  return promise;
};

const list = ["Rojo", "Azul", "Verde"];

addItem("Amarillo", list)
  .then((list) => {
    console.log(`El listado final es: ${list}`);
  })
  .catch((err) => {
    throw new Error(err);
  });

// // console.log(list);

// const contadorTareas = (funciona) => {
//   const promise = new Promise((resolve, reject) => {
//     if (!funciona) {
//       reject("No funciona el servidor ahora mismo");
//     } else {
//       setTimeout(function () {
//         resolve([() => "Tarea 1", () => "Tarea 2", () => "Tarea 3"]);
//       }, 2000);
//     }
//   });
//   return promise;
// };

// contadorTareas(1)
//   .then((data) => console.log(data))
//   .catch((err) => {
//     throw new Error(err);
//   });

// let result;

// setTimeout(() => (result = 1000), 2000);

// console.log(result);

// setTimeout(() => console.log(result), 5000);

// console.log(result);

// Una `Promise` (promesa en castellano) es un objeto que
// representa la terminación o el fallo de una operación asíncrona. Surgen en ES6 para mejorar el proceso de callbacks.

// Por lo general en nuestro proyectos NO vamos a crear promesas,
// vamos a consumirlas (`then`/`catch`), pero veamos la base de las promesas:

// then es usado para manejar el resultado exitoso de una Promise,
// es decir, cuando la Promise es resuelta. then toma como argumento
// una función de retorno de llamada (callback) que se ejecutará una
// vez que la Promise sea resuelta, y que recibirá el resultado de la Promise como argumento.
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

const colores = ["Rojo", "Azul", "Verde"];

addItem("Amarillo", colores)
  .then((list) => {
    console.log(`El listado final es: ${list.join(", ")}`);
  })
  .catch((err) => {
    throw new Error(err);
  });

// La forma de tratar errores en una promesa, es por medio de la función catch
// que recoge lo que enviamos en la función reject dentro de la Promesa.
// Y esta función solo hay que invocarla una vez, no necesitamos comprobar
// en cada llamada si existe error o no. Lo cual reduce mucho la cantidad de código:

// Si nos fijamos, `then(function, function)` puede recibir dos parámetros: 2 funciones o callbacks.

// - La primera functión se ejecutará en caso de éxito y nos permitirá manejar la respuesta en caso de OK.
//  La segunda función se ejecutará en caso de error y nos permitirá manejar el KO.

// Supongamos que estamos creando un juego simple de adivinanza de números.
// En este juego, el jugador debe adivinar un número entre 1 y 10. Si el jugador
// adivina correctamente, se le muestra un mensaje de felicitación; de lo contrario, se le muestra un mensaje de error.

// Para hacer el juego más emocionante, vamos a hacer que el mensaje de felicitación o
// de error se muestre después de un retraso aleatorio de entre 1 y 5 segundos.

function adivinarNumero(numero) {
  return new Promise((resolve, reject) => {
    const numeroAdivinado = Math.floor(Math.random() * 10) + 1;
    console.log(`Número adivinado: ${numeroAdivinado}`);
    setTimeout(() => {
      if (numeroAdivinado === numero) {
        resolve("¡Felicitaciones, adivinaste el número!");
      } else {
        reject("Lo siento, el número que ingresaste es incorrecto.");
      }
    }, Math.floor(Math.random() * 5000) + 1000);
  });
}

adivinarNumero(5)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });

// Escribe una función llamada tirarDado que devuelva
// una Promise que se resolverá con un número aleatorio
// entre 1 y 6, simulando el lanzamiento de un dado.

// La función tirarDado debe utilizar el método Math.random()
// para generar un número aleatorio entre 0 y 1, y luego multiplicar
// este número por 6 y redondearlo hacia arriba utilizando el método Math.ceil() para simular el lanzamiento de un dado.

function tirarDado() {
  return new Promise((resolve, reject) => {
    const valor = Math.ceil(Math.random() * 6);

    if (valor < 1) {
      reject(new Error("El valor debe ser mayor o igual que 1"));
    } else {
      resolve(valor);
    }
  });
}

tirarDado()
  .then((resultado) => {
    console.log(`El resultado del lanzamiento es: ${resultado}`);
  })
  .catch((error) => {
    console.error(error.message);
  });
