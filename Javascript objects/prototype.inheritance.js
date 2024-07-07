// 1. In programming paradigm, a class is a blueprint for creating objects. If you want to reuse the 
// functionality of an existing class, you will need to create a new class which extends the existing class.
// This is called classical inheritance.

// 2. But javascript doesn't use classing inheritance rather it uses prototypal inheritance.
// In prototypal inheritance an 'object' inherits properties of 'another object' via prototype linkage.

let person = {
    name: "Ravi kant",
    greet() {
        return "Hi this is " + this.name;
    }
}

// 3. Javascript engine provides you with an 'Object()' function and anonymous object which is referenced by
// 'Object.prototype'.

// 4. Now, the 'person' object has link to the anonymous object via [[prototype]] linkage. That means, it can
// access any method defined inside the anonymous object referenced by 'Object.prototype'.

// 5. To access the prototype of person object you can use 'person.__proto__', which is same as the anonymous 
// object.
console.log(person.__proto__ === Object.prototype); // true

let teacher = {
    teach: function (subject) {
        return 'I can teach ' + subject + ' subject';
    }
}

// 6. like in the case of person object, 'teacher' object also has link to the anonymous object 'Object.prototype'.
console.log(teacher.__proto__ === Object.prototype); // true

// 7. If you want the 'teacher' object to access all the properties and methods of 'person' object, you can set
// the 'prototype' of teacher object to 'person' object.
teacher.__proto__ = person;

// 8. Now, the teacher object can access the 'name' property and 'greet()' method from the person object via
// the prototype chain:
console.log(teacher.name);
console.log(teacher.greet());

// 9. In this way, teacher object inherites the 'name' property  and 'greet()' method of the person's object.
// This kind of inheritance is called 'prototypal inheritance'.

// 10. In ES5, 'Object.create()' method provides a new way to work with prototypal inheritance.
// Object.create(proto, [propertiesObject])

// 11. This creates an empty teacher object with 'proto' as person object.
let teacher = Object.create(person);

teacher.name = 'Ravi kant';
teacher.greet = function (subject) {
    return 'I can teach ' + subject + ' subject';
}

// 12. Or, it can be also achieved as follows- 
let teacher = Object.create(person, {
    name: { value: 'Ravi kant' },
    greet: { value: function (subject) {
        return 'I can teach ' + subject + ' subject';
    }}
})

console.log(Object.getPrototypeOf(teacher) === person); // true


// 13. In ES6, We use 'class' and 'extends' keywords to implement inheritance.
