// An object is a collection of key/value pairs or properties.
// when the value is a function, the property becomes a method.

// const person = {
//   firstName: "Ravi",
//   lastName: "Kant",
//   greet: function () {
//     console.log(`Hello! Everyone.`);
//   },
//   getFullname: function () {
//     console.log(`This is ${this.firstName} ${this.lastName}`);
//   },
// };

// person.greet();
// person.getFullname();

// ===========================================================

// Constructor function: Use 'new' keyword to create an object
// Constructor function is a regular function which is used to create a type and
// use that to create multiple similar kind of objects
// 1. The name of the constructor function starts with capital letter
// 2. A constructor function should be called with the 'new' keyword

// NOTE: ES6 introduces the 'class' keyword that allows you to define a custom type
// So classes are just Syntactical Sugar over constructor functions with some enhancements.

// What 'new' operator really does ?
// 1. It creates a new instance of the object.
// 2. Assign the arguments to the properties of the object respectively
// 3. Return the 'this' value;

// If the constructor funtion is called with the 'new' keyword, the new.target returns
// a reference of the function. Otherwise, it return 'undefined'.

// console.log("--------------------------------------");
// function Person(firstname, lastname) {
//   if (!new.target) {
//     throw Error("Can not be called without the new keyword");
//   }
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.getFullname = function () {
//     return this.firstname + " " + this.lastname;
//   };
// }

// const P1 = new Person("Ravi", "Kant");
// const P2 = new Person("Kapil", "Rajput");

// NOTE: While creating new Object using above constructor function, 'getFullname' method
// gets copied everytime, which is something not memory efficient.
// So to avoid this we can add the 'getFullname' method in the Prototype of Person's Object.

// NOTE: This below pattern is called the constructor/prototype pattern in ES5.
// function Person(firstname, lastname) {
//   if (!new.target) {
//     throw Error("Can not be called without the new keyword");
//   }

//   this.firstname = firstname;
//   this.lastname = lastname;
// }

// Person.prototype.getFullname = function () {
//   return this.firstname + " " + this.lastname;
// };

// const P1 = new Person("Ravi", "Kant");
// const P2 = new Person("Kapil", "Rajput");
// console.log(P1.getFullname());
// console.log(P2.getFullname());

// ES6 introduces the class keyword that makes the constructor/prototype pattern
// easier to use.

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getFullname() {
    return this.firstname + " " + this.lastname;
  }
}

const P1 = new Person("Ravi", "kant");
const P2 = new Person("Garima", "Singh");
console.log(P1);
console.log(P1.getFullname());
console.log(P2.getFullname());

//The class syntax looks cleaner and less verbose. However, it’s syntactic sugar over the constructor/prototype pattern with some enhancements.
