"use strict";

// Los objetos almacenan conjuntos de datos, funciones y otras entidades asociados con un nombre clave.

let avenger = {};

// console.log(avenger2);

avenger.name = "Iron Man";
avenger.age = 42;
avenger["power"] = "Traje";

const key = "power";
console.log(avenger[key]);

delete avenger.name;

// console.log(avenger);

let avenger2 = {
  name: "Spiderman",
  age: 19,
  power: "Trepar muros",
  "born in USA": true,
};

// console.log(avenger2["born in USA"]);

// Propiedades calculadas: forma de definir propiedades dinámicas que se calculan en tiempo de ejecución.
// Que el nombre de la propiedad se puede calcular mediane una expresión, en vez de una cadena estática. Mediante [nombrePropiedad]

// const miObjeto = {
//   [nombrePropiedad]: valorPropiedad,
// };

let idioma = "es";

const traduccion = {
  en: "Hello",
  fr: "Bonjour",
  [idioma]: "Hola",
};

let cadena = "idioma";
let example = new Object();
// for (let i = 0; i < 10; i++) {
//   example[cadena + i] = i;
// }

// console.log(example);

// for (elem in example) {
//   console.log(elem);
//   console.log(example[elem]);
// }

// console.log(traduccion["es"]);
// console.log(traduccion[idioma]);

///////////// Reducir propiedades

// function makeUser(name, age) {
//   return { name: name, age: age };
// }

function makeUser(name, age) {
  return { name, age };
}

// console.log(makeUser("Ricardo", 20));

const name = "Luis";

let usuario = {
  name,
  edad: 45,
};

// console.log(usuario);

// Operador in: Devuelve true si existe una propiedad con la key que le damos

// nombreKey in nombreObjeto;

// console.log("name" in usuario);
// console.log("oficio" in usuario);

// "name" in usuario ? console.log(usuario.name) : console.log("No existe");
// "oficio" in usuario ? console.log(usuario.name) : console.log("No existe propiedad oficio");

// Palabra this -> Es una palabra clave que se utiliza para referirse al objeto actual donde nos encontramos.
// Si se utiliza en un contexto global toma el valor de window (cuando estamos en un navegador).

let user = {
  name: "John",
  age: 30,
  sayHi() {
    console.log("Hola soy " + this.name);
  },
};

let user2 = {
  name: "Esmeralda",
  sayHi() {
    console.log(this.name);
  },
};

// user.sayHi();

user.name = "Juan";

// user.sayHi();

let nombre = "Oscar";

function Animal(nombre, especie) {
  this.nombre = nombre;
  this.especie = especie;
  this.saludar = function () {
    console.log("Hola soy un " + this.especie + " y me llamo " + this.nombre);
  };
}

const tigre = new Animal("Juanito", "tigre");
tigre.saludar();

const oso = new Animal("Yogi", "oso");
oso.saludar();

console.log(oso);
console.log(typeof oso);
