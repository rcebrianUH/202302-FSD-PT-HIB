// Condicionales -> Sentencias de control de flujo.

// IF -> Evalúa las condiciones entre paréntesis y si el resultado es true ejecuta el bloque
// IF(0) e IF(1) -> 1 es verdadero y 0 es falso
//IF..ELSE IF -> evaluar una segunda condición en caso de que la primera condición del if sea falsa. Si la segunda condición es verdadera,
// se ejecuta el bloque de código asociado. Si la segunda condición es falsa, se pasa a la siguiente línea de código.
//IF..ELSE -> Bloque “else” opcional. Este se ejecutará cuando la condición sea falsa.
const age = 20;
if (age < 18) {
  console.log("Eres menor de edad");
} else if (age >= 18 && age < 65) {
  console.log("Eres mayor de edad pero no estás jubilado");
} else {
  console.log("Eres mayor de edad y estás jubilado");
}

///////////
age = 20;
if (age > 18) {
  console.log("Eres mayor de edad");
} else if (age >= 18 && age < 65) {
  console.log("Eres mayor de edad pero no estás jubilado");
} else {
  console.log("Eres mayor de edad y estás jubilado");
}

// EJERCICIO
const x = "0";
const y = 0;

if (x == y) {
  console.log("La igualdad es verdadera");
} else if (x === y) {
  console.log("La igualdad estricta es verdadera");
} else if (!x && !y) {
  console.log("Ambas variables son falsy");
} else if (x || y) {
  console.log("Al menos una variable es truthy");
} else if (typeof x == typeof y) {
  console.log("Las variables tienen el mismo tipo");
} else {
  console.log("Ninguna de las condiciones anteriores es verdadera");
}

// CONDICIONAL TERNARIO -> permite ejecutar condicionales en una forma más corta y simple.
// condición ? expresión verdadera : expresión falsa;
let edad = 18;
let esMayorDeEdad = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(esMayorDeEdad); // "Es mayor de edad"

// TERNARIO MULTIPLE -> se necesita evaluar múltiples condiciones en una misma expresión. En lugar de utilizar varios
// operadores ternarios separados, se utilizan varios operadores ternarios anidados para evaluar cada una de las condiciones.
let rangoEdad =
  edad < 18
    ? "Es menor de edad"
    : edad >= 18 && edad <= 65
    ? "Entre 18 y 65"
    : "Mayor de 65";

// SWITCH CASE -> es una estructura de control de flujo que te permite ejecutar diferentes bloques de código
// dependiendo del valor de una variable o expresión.
// Es una alternativa más eficiente y legible que el uso de múltiples declaraciones "if".
let color = "rojo";
switch (
  color // Evaluamos una variable o expresión
) {
  case "rojo":
    console.log("El color es rojo");
    break;
  case "azul":
    console.log("El color es azul");
    break;
  case "verde":
    console.log("El color es verde");
    break;
  default:
    console.log("No se reconoce el color");
}
