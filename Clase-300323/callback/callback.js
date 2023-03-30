// En JavaScript, la asincronía es la capacidad de realizar operaciones de
// manera asíncrona o no bloqueante, lo que significa que el código puede
// continuar ejecutándose mientras se espera la respuesta de una operación asincrónica.

// En términos prácticos, esto significa que en lugar de bloquear la ejecución del código
// hasta que una operación (como una petición de red o una operación de entrada/salida de archivos)
// se complete, se pueden enviar estas operaciones a un segundo plano y permitir que el código continúe
// ejecutándose en el hilo principal de la aplicación.

// Para trabajar con operaciones asíncronas en JavaScript, se utilizan las Promises, callbacks y
// más recientemente, la sintaxis de async-await.

// El uso de la asincronía es importante en aplicaciones web y móviles, donde se
// realizan muchas operaciones de entrada/salida, como solicitudes de red y operaciones
// con bases de datos. La asincronía permite que estas operaciones se realicen de forma
// no bloqueante, evitando que la aplicación se bloquee o se vuelva no sensible al
// usuario mientras se realizan estas operaciones.

// Un callback es una función que se pasa como argumento a otra función y se invoca
// dentro de la función receptora. El propósito del callback es proporcionar una función
// de devolución de llamada para que la función receptora la ejecute después de que se haya completado su tarea.

// La función receptora espera que se llame al callback en algún momento durante su ejecución
// y, cuando lo hace, le pasa información relevante. El callback puede tomar esta información y
// realizar alguna acción adicional en función de ella.

// Los callbacks son comunes en JavaScript y se utilizan en muchas situaciones diferentes. Algunos ejemplos incluyen:

// - En eventos del DOM, donde una función de callback se llama cuando ocurre un evento, como hacer clic en un botón.
// - En llamadas asíncronas, como solicitudes de datos a través de una API, donde se proporciona una función de callback
// que se llama cuando se reciben los datos solicitados.

function sumar(a, b, callback) {
  let resultado = a + b;
  callback(resultado);
}

function imprimirResultado(resultado) {
  console.log(`El resultado es ${resultado}`);
}

sumar(2, 3, imprimirResultado); // El resultado es 5

// sumar(2, 3, imprimir);

const callbackResult = (list, message) => {
  console.log(`El listado final es: ${list} - `, message);
};

const noCallbackResult = (list, message) => {
  console.log(`El listado final es: ${list} - `, message);
};

const addItemAndTriggerCallback = (item, list, callback) => {
  if (!list) {
    setTimeout(() => {
      throw new Error("No existe el array");
    }, 2000);
  } else {
    setTimeout(() => {
      list.push(item);
      callback(list, "[OK]");
    }, 2000);
  }
  callback(list, "OK");
};

addItemAndTriggerCallback("Ricardo", ["Juan", "Jose"], callbackResult);
addItemAndTriggerCallback("Ricardo", null, callbackResult);

// Ejemplo utilizando callback
function funcionAsincrona(callback) {
  setTimeout(function () {
    console.log("La función asíncrona ha terminado");
    callback();
  }, 3000);
}

function siguienteFuncion() {
  console.log("La siguiente función ha sido ejecutada");
}

funcionAsincrona(siguienteFuncion);
