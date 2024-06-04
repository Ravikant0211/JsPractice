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