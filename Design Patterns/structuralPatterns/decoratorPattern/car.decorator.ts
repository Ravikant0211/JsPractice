// abstract class Car {
//     public description: string = 'Basic Car';

//     public getDescription() {
//         return this.description;
//     }

//     public abstract cost (): number;
// }

// class ModelX extends Car {
//     description: string = 'Model X';

//     cost(): number {
//         return 73000;
//     }
// }

// class ModelS extends Car {
//     description: string = 'Model S';

//     cost(): number {
//         return 77000;
//     }
// }

// abstract class CarOptions extends Car {
//    public enhancedAutoPilot: string = 'Enhanced Autopilot';
//    public rearFacingSeat: string = 'Rear facing seat';
// }

// class EnhancedAutoPilot extends CarOptions {
//     decoratedCar: Car;

//     constructor (car: Car) {
//         super(); // Constructors for derived classes must contain a 'super' call
//         this.decoratedCar = car;
//     }

//     getDescription(): string {
//         return `${this.decoratedCar.getDescription()}, ${this.enhancedAutoPilot}`;
//     }

//     cost(): number {
//         return this.decoratedCar.cost() + 5000;
//     }
// }

// class RearFacingSeat extends CarOptions {
//     decoratedCar: Car;

//     constructor(car: Car) {
//         super();
//         this.decoratedCar = car;
//     }

//     getDescription(): string {
//         return `${this.decoratedCar.getDescription()}, ${this.rearFacingSeat}`;
//     }

//     cost(): number {
//         return this.decoratedCar.cost() + 4000;
//     }

// }

// let myTesla = new ModelX();
// myTesla = new EnhancedAutoPilot(myTesla);
// myTesla = new RearFacingSeat(myTesla);

// console.log(myTesla.getDescription()); // Model X, Enhanced Autopilot, Rear facing seat
// console.log(myTesla.cost()); // 82000

// -----------------------------------------------------------------------------------------

interface ICar {
    getDescription(): string;
    cost(): number;
}

// Concrete Component: A Basic Car
class BasicCar implements ICar {
    getDescription(): string {
        return 'A Basic Car with: auto gear box, navigation system';
    }

    cost(): number {
        return 50000;
    }
}

// Concrete component: Model S
class ModelS extends BasicCar {
    getDescription(): string {
        return 'Model S with: auto gear box, navigation system';
    }

    cost(): number {
        return 73000;
    }
}

// Concrete component: Model X
class ModelX extends BasicCar {
    getDescription(): string {
        return 'Model X with: auto gear box, navigation system';
    }

    cost(): number {
        return 73000;
    }
}

// Base decorator class 
class CarDecorator implements ICar {
    protected car: ICar;

    constructor (car: ICar) {
        this.car = car;
    }

    getDescription(): string {
        return this.car.getDescription();
    }

    cost(): number {
        return this.car.cost();
    }
}

//  Concrete decorator
class CarWithEnhancedAutoPilot extends CarDecorator {
    getDescription(): string {
        return this.car.getDescription() + ', Enhanced auto pilot';
    }

    cost(): number {
        return this.car.cost() + 5000;
    }
}

// Concrete decorator 
class CarWithRearFacingSeat extends CarDecorator {
    getDescription(): string {
        return this.car.getDescription() + ', Rear facing seat';
    }

    cost(): number {
        return this.car.cost() + 4000;
    }
}


// Client code
let myCar = new ModelX();

// adding features to the car
myCar = new CarWithEnhancedAutoPilot(myCar);
myCar = new CarWithRearFacingSeat(myCar);

console.log(myCar.getDescription());
console.log('Total Cost: ', myCar.cost());

// Model X with: auto gear box, navigation system, Enhanced auto pilot, Rear facing seat
// Total Cost:  82000
