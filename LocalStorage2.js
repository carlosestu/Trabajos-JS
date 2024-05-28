// Starting from the previous exercise, write a method that recovers the data saved in localStorage
//  and prints them in the console.
const user = {
  id: 1,
  name: "John",
  age: 25,
};
let localSave = ((objeto) =>
    localStorage.setItem("usuario", JSON.stringify(objeto)));  
localSave(user);
function recoverLocalSave(usuario) {
    console.log("uauario recuperado:");
    console.log(localStorage.getItem(usuario));
    }
recoverLocalSave("usuario");
