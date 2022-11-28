// Immediately invoked function expression (IIFE) is a function defined as
// an expression and executed immediately after creation.
// SYNTAX:
// (function(){
//   ......
//  })();

// Why IIFEs
// When you define a function or declare a variable the js engine adds it to the global object.
function add(a, b) {
  return a + b;
}

console.log(window.add(10, 20)); //30

// If you have many global variables and functions, the JavaScript engine will only release the memory allocated for them until the global object loses its scopes.

// As a result, the script may use the memory inefficiently. On top of that, having global variables and functions will likely cause name collisions.

// One way to prevent the functions and variables from polluting the global object is to use immediately invoked function expressions.

let sum = (function (a, b) {
  return a + b;
})(10, 20);

console.log(sum); //30
