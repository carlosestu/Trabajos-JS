// Define a class called Person that takes in three parameters in the constructor (firstName, lastName and age). 
//Create the getters and setters methods for each property and a getter method called fullName that returns the full name.
class Person {
    #firstName = "";
    #lastName = "";
    #age = 0;
    constructor(firstName, lastName, age) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
    }
    set firstName(name){
        this.#firstName = name;
    }
    get firstName() {
        return this.#firstName;
    }
    set lastName(secondName){
        this.#lastName = secondName;
    }
    get lastName() {
        return this.#lastName;
    }
    set age(newAge){
        if (newAge <1) {
            this.#age = 1;
        } else if (newAge > 110) {
            this.#age = 110;
        } else {
            this.#age = newAge;
        } 
    }
    get age() {
        return this.#age;
    }
    get fullName() {
        return this.#firstName + " " + this.#lastName;
    }
}
const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName =  'Verdi';
console.log(person.fullName);