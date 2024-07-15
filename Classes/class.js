// 1. A javascript class is a blueprint for creating 'objects'.
// 2. It encapsulates the properties and methods.
// 3. Unlike other programming languages like Java, C++ etc, in Javascript class are 'syntactical sugar' 
// over 'prototypal inheritance'. 

class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return `Hi, This is ${this.name}`;
    }
}

const person1 = new Person('Ravi kant');
console.log(person1.getName());