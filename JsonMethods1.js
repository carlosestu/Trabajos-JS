// Convert the developer object into JSON
// Print developer as JSON object
class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
let devJson = JSON.stringify(new Person(1, 'Mario', 'Rossi', 25));
let developer = JSON.parse(devJson);
console.log(devJson); //en string
console.log(developer); //en JSON