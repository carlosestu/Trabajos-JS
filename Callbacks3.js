// Starting from the previous exercise, we want to add to our function repeatHello, 
// a clearInterval after 5 seconds, could you do that?
// The callback function must be an arrow function, can you also explain why?

async function repeatHello(callback, n) {
  let tiempoEspera = setInterval(callback, 1000);
  setTimeout(() =>clearInterval(tiempoEspera), 1000 * n );
}
let sayHello = (() => console.log("hello") );
// function sayHello() {
//     console.log("hello");
//   } **funciona de la misma manera, sin ser una arrow function
repeatHello(sayHello, 5);

//con respecto a lo de ¿por que debe ser una arrow function?: hasta donde yo tengo entendido, no es necesario que
// el callback sea una arrow function, en este caso, si pusiesemos el callback asi, tambien funcionaría:
// function sayHello() {
//   console.log("hello");
// }, la diferencia es que utilizando una arrow function, el codigo es mas corto y legible.
