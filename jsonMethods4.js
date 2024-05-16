// In this exercise we need to filter the properties of the object person 
// in order to convert just the id and age values into JSON.
// Should return: { "id": 1, "age": 25 }
const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const personCopy = {
  get id() {
    return person.id;
  },
  get age() {
    return person.age;
  }
}
json = JSON.stringify(personCopy);
console.log(json); 


