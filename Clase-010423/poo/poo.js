// Programación Orientada a Objetos (POO) -> Es una forma un poco diferente de programar, que es más cercana a como vemos las cosas
// en la vida real.

// Coche: En la vida real tiene una serie de características como pueden ser el modelo, el color, la matrícula, el dueño,
// la velocidad máxima,... Y también una serie de acciones, como por ejemplo aparcar, acelerar, frenar,...

// En el esquema de POO el coche sería el objeto, las propiedades las características y los métodos serían las funcionalidades asociadas como
// frenar o acelerar.

// const coche = {nombre: ..., modelo:..., matricula:... }

// Las clases son instanciaciones de objetoso abstracciones de objetos. Esto quiere decir que la definición que se da de un objeto es la clase.
// Cuando estamos programando un objeto y definimos sus características y funcionalidades lo que estamos haciendo realmente es programar una clase.

// Coche -> Clase
// Características: Marca, Color, Tipo, Precio, Puertas
// Acciones: Acelerar, Frenar, Encender, Apagar.

// class Coche {
//   marca;
//   color;
//   tipo;
//   precio;
//   puertas;
//   estaEncendido;

//   constructor(marca, color, tipo, precio, puertas) {
//     this.marca = marca;
//     this.color = color;
//     this.tipo = tipo;
//     this.precio = precio;
//     this.puertas = puertas;
//   }

//   acelerar() {
//     console.log("Estoy acelerando");
//   }
//   frenar() {
//     console.log("Estoy frenando");
//   }
//   encender() {
//     if (!this.estaEncendido) this.estaEncendido = true;
//     else console.log("Ya está encendido!");
//   }
//   apagar() {
//     if (this.estaEncendido) this.estaEncendido = false;
//     else console.log("Ya está apagado!");
//   }
// }

// const audi = new Coche("Audi", "Rojo", "R8", 50000, 2);
// const bmw = new Coche("BMW", "Azul", "X3", 40000, 5);

// console.log(audi);
// console.log(bmw);

// audi.acelerar();
// audi.frenar();

// audi.encender();
// audi.encender();
// audi.apagar();
// audi.apagar();

// console.log(`¿El ${audi.marca} está encendido? ${audi.estaEncendido}`);

// La herencia (que a veces se le llama subclase), es un método por el cuál se crea una clase que tiene los métodos y los atributos de la clase
// de la que hereda. Lo bueno de esto es la capacidad para poder definir atributos métodos nuevos que luego se aplican a los atributos y método heredados.

class Vehiculo {
  ruedas;
  nombre;
  constructor(ruedas, nombre) {
    this.ruedas = ruedas;
    this.nombre = nombre;
  }
  emitirSonido() {
    console.log("Piiiiiiii");
  }
  numeroRuedas() {
    console.log(`El ${this.nombre} tiene ${this.ruedas}`);
  }
}

class Coche extends Vehiculo {
  marca;
  color;
  tipo;
  precio;
  puertas;
  estaEncendido;

  constructor(marca, color, tipo, precio, puertas, ruedas, nombre) {
    super(ruedas, nombre);
    this.marca = marca;
    this.color = color;
    this.tipo = tipo;
    this.precio = precio;
    this.puertas = puertas;
  }

  acelerar() {
    console.log("Estoy acelerando");
  }
  frenar() {
    console.log("Estoy frenando");
  }
  encender() {
    if (!this.estaEncendido) this.estaEncendido = true;
    else console.log("Ya está encendido!");
  }
  apagar() {
    if (this.estaEncendido) this.estaEncendido = false;
    else console.log("Ya está apagado!");
  }
}

const audi = new Coche("Audi", "Rojo", "R8", 50000, 2, 4, "coche");
const bmw = new Coche("BMW", "Azul", "X3", 40000, 5, 4, "coche");

class Moto extends Vehiculo {
  tieneSidecar;
  constructor(ruedas, nombre, tieneSidecar) {
    super(ruedas, nombre);
    this.tieneSidecar = tieneSidecar;
  }
}

const ducati = new Moto(2, "moto", true);

audi.encender();
console.log(audi);
console.log(ducati);

audi.emitirSonido();
ducati.emitirSonido();
