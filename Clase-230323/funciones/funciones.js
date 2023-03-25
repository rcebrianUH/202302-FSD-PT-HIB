// Funciones nombradas: Definidas por un nombre y pueden ser expresadas o declaradas.

// Función declarada
function sum(a, b) {
  return a + b;
}
// console.log(sum(2, 3));

// Función expresada
const multiply = function (a, b) {
  return a * b;
};

// console.log(multiply(3, 2));

// Funciones anónimas: son funciones que no tienen nombre, y se definen como una expresión. Se utilizan mayormente para
// utilizarlas como argumentos de otras funciones.

// function doFunction() {

//   //   a();
// }

// (function () {
//   console.log("Hola");
// })();

// doFunction();

// doFunction(function () {
//   console.log("Hola");
// });

const personas = [
  { nombre: "Ana", edad: 32 },
  { nombre: "Juan", edad: 24 },
  { nombre: "María", edad: 28 },
  { nombre: "Pedro", edad: 38 },
];

personas.sort(function (a, b) {
  return a.edad - b.edad;
});

// console.log(personas);

// Funciones constructoras: Son funciones que se utilizan para crear objetos con un conjuntos de propiedades y métodos.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Javier", 30);
const person2 = new Person("Ricardo", 50);
console.log(person1);
console.log(person2);

// Funciones flecha: Son una forma más concisa de escribir funciones anónimas. Se definen utilizando la sintaxis de un flecha

// (param1, param2,...,paramN) => { /*Bloque de código*/ }

const square = (x) => {
  return x * x;
};

const double = (x) => x * 2;

const triple = (x) => x * 3;

// console.log(square(3));
// console.log(double(4));
// console.log(triple(5));

personas.sort((a, b) => a.edad - b.edad);

// function (a, b) {
//     return a.edad - b.edad;
//   }

const saludar = (a) => `Hola, ${a}! Bienvenido`;

function saludar(a) {
  return `Hola, ${a}! Bienvenido`;
}

console.log(saludar("Ivo"));
