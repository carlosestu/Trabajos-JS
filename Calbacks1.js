// Write a function called printAsyncName, which takes a callback and a string(which will be name) as parameters.
//  The callback function will simply print "Hello". 
//  The printAsyncName function will have to execute the callback function after an interval of 1 second. 
//  After an interval of 2 seconds, we must print the name that we take as a parameter.
async function printAsyncName(cb, StringName) {
  function esperar(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    })
  }
  await esperar(1000);
  cb();
  await esperar(1000);
  console.log(StringName);
}
function sayHello() {
  console.log("hello");
}
printAsyncName(sayHello, "Carlos" );
