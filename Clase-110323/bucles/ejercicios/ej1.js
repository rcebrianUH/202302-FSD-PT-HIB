// Crea un programa que genere una matriz de números aleatorios de 5x5
// e imprima por consola la suma de cada fila y de cada columna de la matriz.
// Para crear un numero aleatorio se utiliza Math.floor(Math.random() * 10) + 1;

/////////////////////////////////////////// OPCIÓN A
// Crear la matriz de 5x5
let matriz = [];
for (let i = 0; i < 5; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = Math.floor(Math.random() * 10) + 1;
  }
}

// Sumar cada fila y columna
let sumaFila, sumaColumna;
for (let i = 0; i < 5; i++) {
  sumaFila = 0;
  sumaColumna = 0;
  for (let j = 0; j < 5; j++) {
    sumaFila += matriz[i][j];
    sumaColumna += matriz[j][i];
  }
  console.log(`La suma de la fila ${i + 1} es: ${sumaFila}`);
  console.log(`La suma de la columna ${i + 1} es: ${sumaColumna}`);
}

///////////////////////////////////////// OPCIÓN B

// Crear la matriz de 5x5
matriz = [];
for (let i = 0; i < 5; i++) {
  matriz[i] = [];
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = Math.floor(Math.random() * 10) + 1;
  }
}

// Imprimir la matriz
console.log("Matriz generada:");
for (let i = 0; i < 5; i++) {
  console.log(matriz[i]);
}

// Sumar cada fila y columna
let sumaColumnas = [0, 0, 0, 0, 0];
for (let i = 0; i < 5; i++) {
  sumaFila = 0;
  for (let j = 0; j < 5; j++) {
    sumaFila += matriz[i][j];
    sumaColumnas[j] += matriz[i][j];
  }
  console.log(`La suma de la fila ${i + 1} es: ${sumaFila}`);
}

for (let i = 0; i < 5; i++) {
  console.log(`La suma de la columna ${i + 1} es: ${sumaColumnas[i]}`);
}
