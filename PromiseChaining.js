// Write a first promise that takes as parameter the variable isLogged . 
// If the variable is true, then we return a random number from the resolve, 
// otherwise we dispatch an error. We write a second promise that takes a variable of type number as a parameter.
//  If the input parameter is greater than 0.5, in the resolve we must return the following data:
//   {name: "John", age: 24}, otherwise we must dispatch an error. Once this is done, 
//   try to chain the promises to eventually return the final object {name: "John", age: 24}

const isLogged = true;
function login(variable) {
    return new Promise((resolve, reject) => {
        if (variable === true) {
            let random = Math.random();
            resolve(random);
        } else {
            reject("error");
        }
    })
}
function secondCheck(number) {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            let userDetails = {name: "John", age: 24};
            resolve(userDetails);
        } else {
            reject("error");
        }
    })
}
login(isLogged)
.then((val) => {return secondCheck(val)})
.then((userDetails) => console.log(userDetails))
.catch((error) => console.error("error, user doesnt exist"));
