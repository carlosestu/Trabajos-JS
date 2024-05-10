// The sum function has a high numbers of parameters. 
// How can we improve the code in order to make it accept any amount of numbers to sum as its argument?

let arr = [1, 2, 3, 4, 5];
function sum(...array) {
    return arr.reduce((a, b) => a + b);
}

console.log(sum(...arr));