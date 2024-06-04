// - An object is a collection of key-value pairs or properties.
// When the value is a function, the property becomes a method.

// Object literal syntax to create object

// const person = {
//     firstname: 'Ravi',
//     lastname: 'kant'
// }

// person.greet = function () {
//     console.log('Hello world!');
// }

// person.greet();

// Object method shorthand
// let person = {
//     firstname: 'Ravi',
//     lastname: 'kant',
//     greet: function () {
//         console.log('Hello world!');
//     }
// }

// person.greet();

// ES6 Way
// let person = {
//     firstname: 'Ravi',
//     lastname: 'kant',
//     greet() {
//         console.log('Hello world!');
//     }
// }
// person.greet();

// Accessing properties of an object
// 'this' value references the object that invokes the method.
let person = {
    firstname: 'Ravi',
    lastname: 'kant',
    greet() {
        console.log('Hello world!');
    },
    getFullname() {
        return this.firstname + ' ' + this.lastname;
    }
}

console.log(person.getFullname());