// Starting from the previous exercise, try to better handle all errors through the Error class 
// and the catch method. Also add the finally method.

const isLogged = true;
function login(variable) {
    return new Promise((resolve, reject) => {
        try {
           if (variable === true) {
            let random = Math.random();
            resolve(random);
           } else {
            reject("error, user not login!");
        }
        } catch (error) {
            reject("error, user not login!");
        }
    })
}
function secondCheck(number) {
    return new Promise((resolve, reject) => {
        try {
            if (number > 0.5) {
                let userDetails = {name: "John", age: 24};
                resolve(userDetails);
            } else {
                reject("error, no details for this user!");
            }  
        } catch (error) {
            reject("error, no details for this user!");
        }
    })
}
login(isLogged)
.then((val) => {return secondCheck(val)})
.then((userDetails) => console.log(userDetails))
.catch((error) => console.error(error))
.finally(() => console.log("process ended."));
