// Write a function called repeatHello which takes a callback as it's parameter. 
// The callback function will simply print "Hello". 
// The repeatHello function will have to execute the callback function with an interval of 1 second. 
// The callback function must be an arrow function.
async function repeatHello(callback, n) {
  callback();
  let tiempoEspera = setInterval(callback, 1000);
  setTimeout(() =>clearInterval(tiempoEspera), 1000 * n );
}
let sayHello = (() => console.log("hello") );
repeatHello(sayHello, 3);
