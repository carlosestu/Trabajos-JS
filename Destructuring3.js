// Use the destructuring to make the check of the age easier. Try modifying the parameter of the isAdult function.
const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};
// let {id, firstName, lastName, age} = person;
// function isAdult(age) {
//   return age >= 18;
// }
// console.log(isAdult(age));
function isAdult({age}) {
    return age >= 18;
  }
  console.log(isAdult(person));