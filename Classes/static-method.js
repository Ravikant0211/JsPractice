// Before ES6
function Person (name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}

Person.createAnonymous = function (gender) {
    let name = gender == 'male' ? 'John Doe' : 'Jane Doe';
    return new Person(name);
}

// The createAnonymous() method is considered a static method
// because it doesn't depend on any instance of the Person type 
// for its property values.

var anonymous = Person.createAnonymous();
console.log(anonymous.getName()); // Jane Doe

// Static method in ES6
// In ES6, 'static' keyword is used to define static methods.
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    
    static createAnonymous(gender) {
        let name = gender == 'male' ? 'John Doe' : 'Jane Doe';
        return new Person(name);
    }
}

let anonymous = Person.createAnonymous('male');
console.log(anonymous.getName()); // John Doe

// If you attempt to call the static method from an instance of the class, you will get an error- 
let person = new Person();
console.log(person.createAnonymous());
// TypeError: person.createAnonymous is not a function


// To call a static method from a class constructor or an instance method, you use the class name, 
// followed by the . and the static method:
className.staticMethodName();

// Alternatively, you can use the following syntax:
this.constructor.staticMethodName();