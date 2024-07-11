// The ES6 version of JavaScript uses classes that are defined using the 'class' keyword to implement 
// the 'constructor pattern'. 

class Human {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    describe() {
        console.log(`${this.name} is a ${this.age}-year-old ${this.occupation}`);
    }
}

const person1 = new Human('Ravi kant', 26, 'Engineer');
person1.describe(); // Ravi kant is a 26-year-old Engineer

const person2 = new Human('Kaushal', 24, 'Painter');
person2.describe(); // Kaushal is a 24-year-old Painter