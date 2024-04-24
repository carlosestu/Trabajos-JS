// Create an object person. Print its key/value pair in the console. Try to use the method Object.keys:
// firstName: Mario
// lastName: Rossi
// age: 25

let person= {
  firstname: "Mario",
  lastName: "Rossi",
  age: 25
}
console.log(Object.entries(person));
// console.log(Object.keys(person)); 
// console.log(Object.values(person));  //asi estoy usando el metodo object.keys, imprimiendo primero las claves, y luego sus valores.