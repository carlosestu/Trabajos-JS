// In the exercise.js file, we find a user object. Write a function that saves the user object in localStorage 
// with its 'user' key.
console.log("entra");
const user = {
  id: 1,
  name: "John",
  age: 25,
};
let localSave = ((objeto) =>
    localStorage.setItem("usuario", JSON.stringify(objeto)));  
localSave(user);