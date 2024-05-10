// Do you know how to "merge" the value of the newNumber variable into numberStore 
// without using the array method push?


// let newNumber = 3;
// let numberStore = [0, 1, 2, newNumber];
// console.log(numberStore);
// console.log(newNumber);
// "de esta manera añado el valor de newNumber directamente al array."

let numberStore = [0, 1, 2];
let newNumber = [...numberStore, 3];
console.log(numberStore);
console.log(newNumber);
// y de esta otra manera, añado el contenido de numberStore a la variable newNumber, convirtiendola en un array.
// asi no se modifica el array original.