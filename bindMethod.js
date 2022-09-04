// bind() method

// let person = {
//     name: "Ravi kant",
//     getName() {
//         console.log(this); // this = window object
//         console.log(this.name);
//     }
// }

// let fn = person.getName.bind;
// fn();


// let person = {
//     name: "Ravi kant",
//     getName() {
//         console.log(this); // this = window object
//         console.log(this.name);
//     }
// }

// let fn = person.getName.bind(person);
// fn();

// =====================================================================
// USE CASE OF BIND() METHOD

// 1.) Using bind() to borrow methods from a different object

const Car = {
    name: 'car',
    
    start() {
        console.log('Start the ' + this.name);
    },

    speedUp(arg) {
        console.log('Speed up the ' + this.name + " " + arg + " kmph");
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

let borrowedFun = Car.speedUp.bind(airCraft, 180);
borrowedFun();




