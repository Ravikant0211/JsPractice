// bind() method:
// The bind() method method returns a copy of a function, when invoked, with the 'this' set to a specific value.
// Unlike call() and apply() method, bind() does not immediately execute the function. Instead it returns a copy
// of the function with the 'this' set to a specific value.

// let person = {
//     name: "Ravi kant",
//     getName() {
//         console.log(this); // this = window object
//         console.log(this.name);
//     }
// }

// let fn = person.getName.bind(person);
// fn();

// =====================================================================
// USE CASE OF BIND() METHOD

// 1.) When you pass the method of an object into another function as a callback, the 'this' context is lost.
const person = {
  name: "Arushi",
  getName: function () {
    console.log("Hello, " + this.name); // undefined
  },
};

setTimeout(person.getName, 1000); // lost the person context.
// The 'this' inside the 'setTimeout' function is set to the 'global object'.
// When the callback person.getName is invoked, the name does not exist in the global object and is set to undefined.

// 1.) Using bind() to borrow methods from a different object

const Car = {
  name: "car",

  start() {
    console.log("Start the " + this.name);
  },

  speedUp(arg) {
    console.log("Speed up the " + this.name + " " + arg + " kmph");
  },

  stop() {
    console.log("Stop the " + this.name);
  },
};

const airCraft = {
  name: "aircraft",

  fly() {
    console.log("Fly");
  },
};

let borrowedFun = Car.speedUp.bind(airCraft, 180);
borrowedFun();
