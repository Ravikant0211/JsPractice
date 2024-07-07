// the 'this' keyword in Javascript is used in global and functional context.
// It's behaviour changes between strict and non-strict modes.

// In js, this referes to the object that is calling the function.

// const car = {
//   brand: "Audi",
//   getBrand: function () {
//     return this.brand;
//   },
// };

// const brand = car.getBrand();
// console.log(brand); // Audi

// 1. GLOBAL CONTEXT
// In global context, the 'this' keyword references to the global object, which is the
// 'window' object on the web browser or 'global object' on Node js.

console.log(this === window); // true

window.color = "red";
console.log(window.color); // red

// 2. FUNCTION CONTEXT
// In javaScript you can call a function in following different ways:-
// 1) Simple function call
// 2) Method call
// 3) Constructor call
// 4) Indirect call

// 1). SIMPLE FUNCTION CALL
// In the non-strict mode, the this references to window object

// function show() {
//   console.log(this === window); // true
// }

// show(); // true
// window.show(); // true

// In the strict mode, "this" is set to undefined.
function show() {
  "use strict";
  console.log(this === undefined); // true

  function display() {
    console.log(this === undefined); // true
  }
  display();
}
show(); // true

// 2). METHOD INVOCATION
// When you call a method of an object, JS sets 'this' to the object, which owns the method.
// const car = {
//   brand: "Audi",
//   getBrand: function () {
//     return this.brand;
//   },
// };

// const bike = {
//   brand: "Harley Davidson",
// };

// const brand = car.getBrand;
// console.log(brand()); // undefined:- beacuse here the context is lost

// To fix this, use the 'bind()' method of the Funtion.prototype
// const brand = car.getBrand.bind(car);
// const brand = car.getBrand.bind(bike);
// console.log(brand());
// In this example bind() method sets the this to the bike object.

// 3). Constructor Invocation
// function Car(brand) {
//   if (!new.target) {
//     throw Error("cant't be called without new operator");
//   }
//   this.brand = brand;
// }

// Car.prototype.getBrand = function () {
//   return this.brand;
// };

// const car = new Car("BMW");
// console.log(car);
// console.log(car.getBrand());

// 4). Indirect Invocation
// In javaScript, functions are first-class citizens. In other words, funtions are objects,
// which are instances of the 'Function type'.

// The Function type has two methods: call() and apply().
// These methods allows you to set the 'this' value when calling a function.

// function getBrand(prefix) {
//   return prefix + this.brand;
// }

// const audi = { brand: "Audi" };
// const honda = { brand: "Honda" };

// console.log(getBrand.call(audi, "It is ")); // context is set to audi object.
// console.log(getBrand.call(honda, "It is ")); // context is set to honda object.

// ARROW FUNCTIONS**
// ES6- the concept of Arrow functions.
// In arrow functions, js sets the 'this' lexically.
// It means the arrow function does not create its own execution context but inherits the
// 'this' from the outer scope where the function is defined.

const getThis = () => this;
console.log(getThis() === window); // true

// Since arrow functions do not create their own execution context.
// defining a method using arrow function will cause an issue.
// const car = { brand: "Audi" };
// car.__proto__.getBrand = () => {
//   return this.brand;
// };
// console.log(car.getBrand());

function Car() {
  this.speed = 120;
}

Car.prototype.getSpeed = () => {
  console.log(this === window); // true
  return this.speed;
};

const car = new Car();
console.log(car.getSpeed()); // undefined
