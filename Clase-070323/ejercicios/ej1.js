// ¿Cómo acceder al primer elemento de un array? Dime 4 opciones
let arr = [3, 5, 7, 2, 5];
console.log(arr[0]);

console.log(arr.shift());
arr.unshift(3);

console.log(arr.reverse()[arr.length - 1]);
arr.reverse();

console.log(arr.slice(0, 1)[0]);

console.log(arr.splice(0, 1)[0]);
arr.unshift(3);

console.log(arr);

// ¿Cómo acceder al último elemento de un array? Dime 4 opciones
console.log(arr[arr.length - 1]);

console.log(arr.slice(-1)[0]);

console.log(arr.pop());
arr.push(5);

console.log(arr.splice(arr.length - 1, 1)[0]);
arr.push(5);

console.log(arr.reverse()[0]);

arr = [3, 5, 7, 2, 5];
let primerElem = arr[0];
console.log(primerElem);
