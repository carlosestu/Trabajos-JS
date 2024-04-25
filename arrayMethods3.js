// Create a function called ageAverage that takes in an array of people and returns the average age.

let persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];
function calculateAverageAge(persons) {
  let suma = 0;
  persons.forEach((el) => {
    suma += el.age
  });
  let resultado= suma / persons.length
  return resultado;
}
let average = calculateAverageAge(persons);
console.log(persons);
console.log(average);