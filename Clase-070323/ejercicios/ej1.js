// ¿Cómo acceder al primer elemento de un array? Dime 4 opciones
let arr = [1, 2, 3, 4];
arr[0];
arr.shift();
arr.slice(0, 1);
arr.splice(0, 1)[0];

// ¿Cómo acceder al último elemento de un array? Dime 4 opciones
arr[arr.length - 1]
arr.pop()
arr.slice(arr.length - 1, arr.length)
arr.splice(arr.length - 1, 1)[0]