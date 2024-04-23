// Create a function sumUntil that takes in a parameter and retunrs the sum of all numbers ranging from one to the value passed as parameter.


function sumUntil(maxValue) {
    let suma = 0;
    for (let i = 0; i <= maxValue; i++) {
       suma = i+ suma;
    }
    return suma;
}

console.log(sumUntil(5)); 