// Prototype:
// In JS, Objects inherit properties from another object via Prototype.
// Every object has its own prototype. Prototype itself is an object which has its own
// prototype. This creates a Prototype chain. The prototype chain ends when a prototype
// has null for its own prototype.

let person = { name: "Ravi kant" };
console.log(person);
console.log(person.toString());
console.log(Object.prototype);
console.log(typeof Object); // Object() is a function in javascript
console.log("------------------------------");

// if you try to access the property of an object. if that property exists in the
// object it will return the result as expected. However, if you access a property
// that does not exist in the object, the js engine will search that in the object's
// prototype.
// and if the js engine can't find the property in tha prototype. it will search that
// in the prototype's prototype object untill either it finds the property or reaches the
// end of the prototype chain.

//NOTE: The Object.prototype has an important property called 'constructor' that references
// the Object() function

console.log(Object.prototype.constructor === Object); // true

// Behind the scene, js creates a new function Person() and an anonymous object.
function Person(name) {
  this.name = name;
}
//Like the Object() function, the Person() function has a property called prototype that references an anonymous object.
// And the anonymous object has the constructor property that references the Person() function.
// console.log(Person);
// console.log(Person.prototype);
console.log(Person.prototype.constructor === Person); // true

// Defining methods in the JavaScript prototype object
Person.prototype.greet = function () {
  return "Hi, I am" + " " + this.name + "!";
};

const person1 = new Person("Ravi kant");
console.log(person1.greet());
