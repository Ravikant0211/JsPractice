// Constructor pattern-
// 1. In javascript 'constructor' are the special function that are used to initialize an object with
// special properties and methods.
// 2. The 'Constructor pattern' as the name defines, is the 'class based' pattern, which uses the constructor
// present in the class to create specific types of objects.

// When to use the 'Constructor Pattern'
// 1. When you want to create multiple instances of the same template, since the instances can share the
// methods but still can be different.
// 2. This pattern can be useful in libraries and plugins.

// Example-
function Human (name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    // this.describe = function () {
    //     console.log(`${this.name} is a ${this.age}-year-old ${this.occupation}`);
    // }
}

Human.prototype.describe = function () {
    console.log(`${this.name} is a ${this.age}-year-old ${this.occupation}`);
}

const person1 = new Human('Ravi kant', 26, 'Engineer');
person1.describe(); // Ravi kant is a 26-year-old Engineer

const person2 = new Human('Kaushal', 24, 'Painter');
person2.describe(); // Kaushal is a 24-year-old Painter