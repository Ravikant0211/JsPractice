// The combination of 'constructor' and 'prototype' pattern is the most common way of defining 
// types in ES5. It makes code more memory efficient. In this pattern-  
// 1. The constructor pattern defines the object property.
// 2. The prototype pattern defines the object methods.

function Employ(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Employ.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}

const E1 = new Employ('Ravi', 'Kant');
const E2 = new Employ('Subham', 'kumar');

console.log(E1.getFullName()); // Ravi Kant
console.log(E2.getFullName()); // Subham kumar


// CLASSES IN ES6
// The 'class' in ES6 makes constructor/prototype pattern easier to use.
class Employ {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName () {
        return this.firstName + ' ' + this.lastName;
    }
}

const EE1 = new Employ('John', 'Doe');
const EE2 = new Employ('Jane', 'Doe');

console.log(EE1.getFullName());
console.log(EE2.getFullName());

// Here 'class' is just a syntactic sugar over constructor/prototype pattern.
// It is making code more cleaner and less verbose.
// What it doing is the following-
// 1. It is allowing object property to define in the EE1 and EE2 objects respectively.
// 2. It created 'getFullName()' method inside the 'Employ.prototype' object.
// 3. Objects EE1 and EE2 are linked to 'Employ.prototype' object via [[prototype]] linkage.
