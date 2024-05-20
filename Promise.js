// Write a promise. If the variable called number is greater than 10, 
// then it returns a resolve, otherwise it returns a reject. 
// Then manage the promise with then and catch in case of any reject.

const number = 15;
let prom = new Promise((resolve, reject) => {
 if (number > 10) {
  resolve(number);
 } else {
  reject(number);
 }
})
prom
.then((val) => console.log(`el numero ${val} es mayor que 10`))
.catch((err) => console.error(`error, el numero ${err} es menor o igual que 10`));