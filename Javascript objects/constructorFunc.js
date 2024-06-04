// 'contructor' function and 'new' keyword to create object

// CONSTRUCTOR FUNCTION- 
// - constructor function defines the custom type of an object
// - And 'new' keyword is used to create multiple objects from this type
// - CF name starts with a capital letter
// - CF only be called with the 'new' operator

// NOTE- ES6 provides class keyword to define a custom type

// EXAMPLES-
// function Person(firstname, lastname) { // defines a custom Person type
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.getFullname = function() {
//         return this.firstname + ' ' + this.lastname;
//     }
// }
// new keyword to create an object of Person type
// let person = new Person('Ravi', 'kant');
// console.log(person.getFullname());

// Working of 'new' operator
// - create an empty object of type Person and assing it to 'this' variable
// - Assign the arguments 'Ravi' and 'kant' to the 'firstname' and 'lastname'
//   properties of the object.
// - Return the 'this' value.
// function Person(firstname, lastname) {
//     // this = {}

//     // add properties to this
//     this.firstname = firstname;
//     this.lastname = lastname;

//     // this = {
//     //     firstname = 'Ravi',
//     //     lastname = 'kant'
//     // }

//     // return this
// }

// NOTE- The problem with constructor function is that when
// you create multiple instances of the 'Person', this.getFullname()
// is duplicated in every instance, which is not memory efficient.
// This issue is solved by prototype, In which all instances of a 
// custom type share the same methods.


// Return value from constructor function
// - On explicitly returning an object from the constructor func
//   that object is returned instead of 'this'
// - If return value is other than a object then,  it is ignored. 
//   And 'this' is returned.

// Calling constructor func without new operator-
// - doesn't bind this to the custom type object, but instead to global
//   object.

// 'new.target' property-
// - if constructor func is called with 'new' keyword, the new.target
//   returns reference of the func. Otherwise returns undefined.

function Person(firstname, lastname) {
    if (!new.target) {
        // throw Error('Can not be called without the new keyword');
        return new Person(firstname, lastname); // to make it more flexible
    }
    this.firstname = firstname;
    this.lastname = lastname;
    this.getFullname = function () {
        return this.firstname + ' ' + this.lastname;
    } 
}

const person1 =  Person('Ravi', 'kant');
const person2 = new Person('Garima', 'singh');
console.log(person1.getFullname());
console.log(person2.getFullname());