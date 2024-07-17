// 'new.target'
// - It is used to detect  if the 'function' or 'constructor' is called using the 'new' operator.
// - 'new.target' is available in all functions.
// - However, in 'arrow function' new.target belogns to surrounding function.
function Person (name) {
    if (!new.target) {
        throw "must use new operator to call Person"
    }
    this.name = name;
}
const p = new Person('Ravi kant');
console.log(p.name); // Ravi kant

// JavaScript new.target in constructors
class Person {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

let john = new Person('John Doe'); // Person
let lily = new Employee('Lily Bush', 'Programmer'); // Employee