// Supongamos que estamos creando un juego simple de adivinanza de números.
// En este juego, el jugador debe adivinar un número entre 1 y 10. Si el jugador
// adivina correctamente, se le muestra un mensaje de felicitación; de lo contrario, se le muestra un mensaje de error.

// Para hacer el juego más emocionante, vamos a hacer que el mensaje de felicitación o
// de error se muestre después de un retraso aleatorio de entre 1 y 3 segundos.

function adivinarNumero(numero) {
  let promise = new Promise((resolve, reject) => {
    // const numeroAdivinado = Math.floor(Math.random() * 10) + 1;
    const numeroAdivinado = 5;
    console.log(`Numero a adivinar: ${numeroAdivinado}`);
    setTimeout(() => {
      if (numeroAdivinado === numero) {
        resolve({msg: "Felicitaciones, adivinaste el numero"});
        console.log(promise);
      } else {
        reject("Lo siento, el numero está mal");
        console.log(promise);
      }
    }, Math.floor(Math.random() * 1000) + 1000);
  });
  return promise;
}

// adivinarNumero(num) nos devuelve una promise, que será un mensaje (string) de felicitación o de error
adivinarNumero(5)
  .then((resultado) => {
    console.log("Entra en el then");
    console.log(resultado.msg);
  })
  .catch((error) => {
    console.log("Entra en el catch");
    console.log(error);
  });
