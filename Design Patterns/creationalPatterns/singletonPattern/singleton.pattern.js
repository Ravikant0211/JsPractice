// - singleton pattern is a type of creational pattern.
// - It restricts the instantiation of a class to a single object.
// - It allows the class to create an instance of the class the first time it is instantiated. 
// - On the subsequent tries of instantiating a class, the last instance is returned. 
//   No new instance is created.

// Example
// A real-life example is a printer a couple of office employees want to use. It’ll be a shared 
// resource amongst all the employees. Hence, a single instance of the printer is required so that
// everyone can share instead of having a new instance for each employee who wants to print something.

let instance = null
class Printer {
    constructor(pages) {
        this.pages = pages;
    }
    display() {
        console.log(`You are connected to printer. You want to print ${this.pages} pages`);
    }
    static getInstance(noOfPages) {
        if (!instance) {
            instance = new Printer(noOfPages);
        }
        return instance;
    }
}

const p1 = Printer.getInstance(5);
console.log(p1);
p1.display();
const p2 = Printer.getInstance(10);
console.log(p2);
p2.display();
// Output:-
// Printer { pages: 5 }
// You are connected to printer. You want to print 5 pages
// Printer { pages: 5 }
// You are connected to printer. You want to print 5 pages


// When to use Singleton Pattern ?
// - Singleton Pattern is used when you want a single object to coordinate actions across the system.
//   It is mostly used by the following- 
//   - Services: Services can be a singleton since they store the state, configuration and provide
//     access to resources. 
//   - Databases: when it comes to database connections, databases such as MongoDB utilize the singleton 
//     pattern.
//   - Configurations: if there is an object with a specific configuration, you don’t need a new instance 
//     every time that configuration object is needed.

