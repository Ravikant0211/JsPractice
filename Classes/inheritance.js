// Inheritance using 'extends' and 'super'
// - prior to ES6, implementing proper inheritance requires 'prototypal inheritance' strategy.
// - Example of prototypal inheritance-
function Animal (legs) {
    this.legs = legs;
}
// - constructor function for creating Animal object
// - It takes one 'legs' parameter and assigns it to the instance's legs property.

Animal.prototype.walk = function () {
    console.log('Walking on ' + this.legs + ' legs');
}
// - Adds a method walk to Animal's prototype

function Bird (legs) {
    Animal.call(this, legs);
}
// - It calls the 'Animal' constructor function with the current 'Bird' instance ('this') and 'legs' parameter
// - This effectively sets legs property on Bird's instance as it would do on Animal's instance.

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
// - Setting up inheritance from Animal to Bird
// - 'Bird.prototype = Object.create(Animal.prototype)' creates a new object with 'Animal.prototype'
//    as its prototype and assigns it to 'Bird.prototype'.
// - This means that intances of 'Bird' will inherit from 'Animal.prototype'.

console.log(Bird.prototype.__proto__ === Animal.prototype); // true

Bird.prototype.fly = function () {
    console.log('flying');
}
// - Adds a method fly to the Bird's prototype
// - 'fly' is called on an instance of 'Bird'

const pegion = new Bird(2);
// new Bird(2);: Calls the Bird constructor, which in turn calls the Animal constructor,
// setting 'this.legs' to '2'
pegion.walk(); // Walking on 2 legs
pegion.fly(); // flying

// ------------------------------------------------------------------------------------------

// ES6 class syntax
class Animal {
    constructor (legs) {
        this.legs = legs;
    }
    walk () {
        console.log('Walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor (legs) {
        super(legs);
    }
    fly () {
        console.log('flying');
    }
}

const bird = new Bird(2);
bird.fly();
bird.walk();

// - 'extends' keyword is used to make 'Bird' class inheriting from the 'Animal' class.
// - The 'Animal' class is called the 'Base class' or 'Parent class' while 'Bird' class is called
//   'Derived class' or 'Child class'.
// - 'Bird' class inherits all the property and methods of the 'Animal' class.
// - In the Bird‘s constructor, call 'super()' to invoke the Animal‘s constructor with the legs argument.
// - As you can see in the Bird class, the super(legs) is equivalent to the following statement in ES5:
//   'Animal.call(this, legs);'
// - JavaScript requires the child class to call super() if it has a constructor.
// - If the Bird class doesn’t have a constructor, you don’t need to do anything else:
class Bird extends Animal {
    fly() {
        console.log('flying');
    }
}

// - It is equivalent to the following:
class Bird extends Animal {
    constructor(...args) {
        super(...args);
    }
    fly() {
        console.log('flying');
    }
}

// - However, If the child class has a constructor, it has to call super(), otherwise it will throw error.
class Bird extends Animal {
    constructor(legs) {
    }
    fly() {
        console.log('flying');
    }
}
// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

// If you want to initialize color property of the 'Bird' class-
class Bird extends Animal {
    constructor (legs, color) {
        super(legs);
        this.color = color;
    }
    fly () {
        console.log('flying');
    }
    getColor() {
        return this.color;
    }
} 

const pegion = new Bird(4, 'White');
console.log(pegion.getColor());

// ------------------------------------------------------------------------------------

// Shadowing Methods
class Dog extends Animal {
    constructor () {
        super(4);
    }
    walk() {
        console.log('go walking');
    }
}
let bingo = new Dog();
bingo.walk(); // go walking

// To call the methods of parent class in the child class, you can use 'super.method(arguments)' like this: 
class Dog extends Animal {
    constructor () {
        super(4);
    }
    walk() {
        super.walk();
        console.log('go walking');
    }
}
let bingo = new Dog();
bingo.walk();
// walking on 4 legs
// go walking

// -------------------------------------------------------------------------------------
// INHERITING STATIC MEMBERS
// Besides the properties and methods, the child class also inherits all static properties and methods of the parent class.
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk () {
        console.log('Walking on ' + this.legs + 'legs');
    }

    static helloWorld () {
        console.log('Hello World');
    }
}

class Bird extends Animal {
    fly() {
        console.log('flying');
    }
}

Bird.helloWorld(); // Hello World

// --------------------------------------------------------------------------------------------
// Inheriting from Built-in types-
// JavaScript allows you to extend a built-in type such as 'Array', 'String', 'Map', and 'Set' through inheritance.
// Example- Implementation of 'Queue' datastructure
class Queue extends Array {
    enqueue (e) {
        super.push(e);
    }
    dequeue ()  {
        return super.shift();
    }
    peek () {
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}

const customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');
console.log(customers);

while (!customers.empty()) {
    customers.dequeue();
}
console.log(customers);
// Queue(3) [ 'A', 'B', 'C' ]
// Queue(0) []


///-----------------------------------------------------------------------------------
// SUMMARY-
// 1. Use the extends keyword to implement the inheritance in ES6. The class to be extended is called a base class or
// parent class. The class that extends the base class or parent class is called the derived class or child class.
// 2. Call the super(arguments) in the child class’s constructor to invoke the parent class’s constructor.
// 3. Use super keyword to call methods of the parent class in the methods of the child class.