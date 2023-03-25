// Crea una función flecha que tome como parámetros un número y una potencia, y retorne el resultado de elevar el número a la potencia:
// Math.pow(numero, potencia)

const elevar = (numero, potencia) => Math.pow(numero, potencia);

console.log(elevar(2, 3));

// Crea una función flecha que tome como parámetro un array de números y retorne la suma de todos ellos:

const sumarArrays = (miArray) => {
  let suma = 0;
  for (let i = 0; i < miArray.length; i++) {
    suma += miArray[i];
  }
  return suma;
};

console.log(sumarArrays([1, 2, 3, 4, 5]));

