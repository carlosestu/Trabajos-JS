// In this exercise we have created two objects: person1 e person2. The object person2 has been assigned to the object person1. You should modify the property firstName of the object person2 in "Simon".

// Write a comment explaining why, by modifying the object person2, also the object person1 would be modified.

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
// };

// const person2 = person1;

// // Modify the property `firstName` of the `person2` in "Simon".

// console.log(person1);
// console.log(person2);


let person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};
let person2 = {};
for (key in person1) {
   person2[key]=person1[key];
}
person2.firstName = "Carlos";
console.log(person1);
console.log(person2);

// la razon por la cual tal y como estaba antes, al modificar person1, se modificaba tambien person2, 
// es porque al poner person2=person1, person2 esta apuntando exactamente al mismo sitio en el que esta almacenado person1,
// y por lo tanto los valores de person2 seran siempre los mismos que los de person1, tal y como lo he puesto yo, person2 se almacena
// en un sitio nuevo, y con el bucle for in copia los valores de person1, pero con la diferencia de que al estar en distintos puntos de almacenamiento
// permite cambiar los valores de uno, sin que se cambien tambien los del otro.
