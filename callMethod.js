// call() method:
// The call() and apply() methods call a function with a given 'this' value and arguments.
// The difference between the call and apply is that you need to pass the arguments to the apply()
// method as an array like object. whereas you pass the arguments individully to the call() method.

// function add(x, y) {
//     return x + y;
// }
// console.log(add instanceof Function); // true


// function add(x, y) {
//     'use Strict';
//     console.log(this) // 
//     return x + y;
// }

// let result = add.call(this, 10, 20);
// console.log(result);

// let greeting = "Hi"

// let messenger = {
//     greeting: "Hello"
// }

// function say(name) {
//     console.log(this.greeting + " " + name);
// }

// say.call(this, "Ravi");

// ==============================================================================
//1). Using the JavaScript call() method to chain constructors for an object
// function Box(height, width) {
//     this.height = height;
//     this.width = width;
// }

// function Widget(color, height, width) {
//     console.log(this);
//     Box.call(this, height, width)
//     console.log(this);
//     this.color = color;
//     console.log(this);
// }

// let widget = new Widget("red", 100, 200);
// console.log(widget);


// ====================================================================================
//2). Using the JavaScript call() method for function borrowing

const Car = {
    name: 'car',
    
    start() {
        console.log('Start the ' + this.name);
    },

    speedUp() {
        console.log('Speed up the ' + this.name);
    },

    stop() {
        console.log("Stop the " + this.name);
    },
}

const airCraft = {
    name: 'aircraft',
    
    fly() {
        console.log('Fly')
    }
}

Car.start.call(airCraft);
Car.speedUp.call(airCraft);
Car.start();
airCraft.fly();
