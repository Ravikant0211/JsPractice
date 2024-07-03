// JS Prototype
// - Every object has its own property 'prototype'.
// - Objects inherit features from one another via 'prototypes'.
// - 'prototype' is also another object, which has its own prototype.
//    This creates 'prototype chain'.
// - prototype chain ends when a prototype has 'null' for its own prototype.

let person =  { name: 'Ravi kant' };
console.log(person);

// When trying to access a property in an object-
// - If property exist in the object, it returns property value.
// - If property doesn't exist in the object, the JS engine search
//   it in the protype chain and returns the value accordingly.


// Built in Object() funtion.
console.log(typeof Object); // returns 'function'

// The 'Object.prototype' has an important property called 'constructor'
// that references the Object() function.
console.log(Object.prototype.constructor === Object); // true


// Use cases- 

function Person(name) {
    this.name = name;
}

console.log(Person);
console.log(Person.prototype);


// The Person() function has a 'prototype' that references an anonymous object.
// The anonymous object has a 'constructor' property that references the 'Person()' function.
// In addition javascript links 'Person.prototype' object to 'Object.prototype' object via '[[prototype]]', 
// which is called 'prototype linkage'.

// DEFINING METHODS IN PROTOTYPE OBJECTS-
// This creates a greet() method inside 'Person.prototype' object.
Person.prototype.greet = function () {
    return "Hi I am " + this.name;
}

// lets create a person p1
const p1 = new Person('Ravi kant');
console.log(p1.greet()) // Hi I am Ravi kant
// Here newly created 'p1' object is linked to 'Person.prototype' object via [[prototype]] linkage.

const p2 = new Person('Mohit kumar');
console.log(p2.greet()); // Hi I am Mohit kumar
// Any number of objects created from "Person" will create the link to 'Person.prototype' object via 
// [[prototype]] linkage.