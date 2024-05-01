// Class definition
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        return firstName + lastName;
         }
}
let developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);