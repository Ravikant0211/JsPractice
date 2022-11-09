// CLOSURES:-
// Ans:- In JavaScript closures are the function which references variables int
// outer scope from their inner scope.
// Closure preserves the outer scope in its inner scope

// Lexical Scoping:-
// Ans:- Lexical scoping defines the 'scope of a variable' by its postion in
// in the source code.

// let name = "Ravi kant"; // global variable
// function say() {
//   let message = "Hello,"; // Local variable
//   console.log(message + " " + name);
// }
// say();

// here, message variable is a local variable which is only accesible inside the say() function
// So, JavaScript engine uses the scope to manage the variables' accessiblity.

//--------------------------------------------------------------------------------------------------

// According to the lexical scoping, the scopes can be nested and the inner function can access
// the variables declared in its outer scope.

function greeting() {
  let message = "hii";

  function sayHi() {
    console.log(message);
  }

  return sayHi;
}

const closure = greeting();
closure();

// When greeting() function is called, it creates local variable named 'message'
// and a function named 'sayHi()'. But instead of executing sayHi() function inside
// it returns the sayHi() function object.

// And outside the greeting() function we store the reference of the sayHi() function
// returned by the greeting() function, in the closure variable.

// And when you execute the sayHi() function using the closure variable: closure().
// You get the same result.

// Normally, Local variable only exists during the execution of the function.
// after the execution, Local variable is no longer accessible.

// Hence the same, when greeting() function completes it execution, the message variable
// is no longer accesible.

// But in this case, when we execute the closure() function that references to the sayHi() function
// the message variable still exist.

// This is the magic of Closure. So, here, sayHi() function is a closure that preserves the
// outer scope variables inside its inner scope.

//------------------------------------------------------------------------------------------------------

// JavaScript closures in Loop-
// for (var index = 1; index <= 3; index++) {
//   setTimeout(() => {
//     console.log("after " + index + " seconds: " + index);
//   }, index * 1000);
// }

// output:-
// after 4 seconds: 4
// after 4 seconds: 4
// after 4 seconds: 4

// The reason you get the same message after 4 seconds is that the callback passed to
// the setTimeout() is a closure. It remembers the value of 'index' from the last iteration
// of the loop, which is 4.

// And all three closures created by the for loop shares the same global scope and access
// the same value of index.

// TO FIX THIS, THERE ARE TWO POPULAR SOLUTIONS:  IIFE & let Keyword
//1.) USING AN Immediately invoked function expression (IIFE)
// IIFE creates a new scope by declaring a function and immediately execute it.
// for (var index = 1; index <= 5; index++) {
//   (function (index) {
//     setTimeout(() => {
//       console.log("after " + index + " seconds: " + index);
//     }, index * 1000);
//   })(index);
// }

//2.) USING LET KEYWORD
// In ES6, you can use the let keyword to declare a variable that is block-scoped
// If you use the let keyword in the for loop, it will create a new lexical scope
// in each iteration. In other words, you will have a new 'index' variable in each
// iteration.

// In addition, the new lexical scope is chained up to the previous scope so that the previous value of the index is copied from the previous scope to the new one.

for (let index = 1; index <= 5; index++) {
  setTimeout(() => {
    console.log("after " + index + " seconds: " + index);
  }, index * 1000);
}
