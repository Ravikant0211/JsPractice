// - The instanceof operator returns 'true' if a prototype of constructor appears 
// in the prototype chain of objects.

function Person (name) {
    this.name = name;
}

let p1 = new Person('Ravi kant');
console.log(p1 instanceof Person); // true
// It returns true because the 'Person.prototype' appears on the prototype chain of the p1 object.
console.log(p1 instanceof Object); // true
// It returns true for the same reason as above, because the 'Object.prototype' appears on the 
// prototype chain of the p1 object.

class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employ extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

let e1 = new Employ('Ravi kant', 'Software developer');

console.log(e1 instanceof Employ); // true
console.log(e1 instanceof Person); // true
console.log(e1 instanceof Object); // true

// This works the same way in case class as in case of constructor function.