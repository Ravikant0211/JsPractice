// Interface representing a Basic Computer
interface IComputer {
    assemble(): string;
    cost(): number;
}

// Concrete component: Basic Computer
class BasicComputer implements IComputer {
    assemble(): string {
        return 'Basic Computer with: CPU, Motherboard, and Power supply';
    }

    cost(): number {
        return 30000;
    }
}

// Base decorator class
class ComputerDecorator implements IComputer {
    // protected members can only be accessed within the class or the class which extends this class
    protected computer: IComputer; 

    constructor(computer: IComputer) {
        this.computer = computer;
    }

    assemble(): string {
        return this.computer.assemble();
    }   
    
    cost(): number {
        return this.computer.cost();
    }
}

// Concrete Decorator: Adding a Graphic card
class ComputerWithGraphicCard extends ComputerDecorator {
    assemble(): string {
        return this.computer.assemble() + ', Graphic card';
    }

    cost(): number {
        return this.computer.cost() + 1500; // adding cost of the graphic card
    }
}

// Concrete Decorator: Adding extra RAM
class ComputerWithExtraRAM extends ComputerDecorator {
    assemble(): string {
        return this.computer.assemble() + ', extra 16GB RAM';
    }

    cost(): number {
        return this.computer.cost() + 2000; // adding cost of the extra 16GB RAM
    }
}

// // Concrete Decorator: Adding SSD
class ComputerWithSSD extends ComputerDecorator {
    assemble(): string {
        return this.computer.assemble() + ', 1TB SSD';
    }
    
    cost(): number {
        return this.computer.cost() + 3000; // adding cost of the 1TB SSD
    }
}

// Client Code
let myComputer = new BasicComputer();

// Adding features dynamically
myComputer = new ComputerWithGraphicCard(myComputer);
myComputer = new ComputerWithExtraRAM(myComputer);
myComputer = new ComputerWithSSD(myComputer);

console.log(myComputer.assemble());
console.log('Total Cost: ', myComputer.cost());

// Basic Computer with: CPU, Motherboard, and Power supply, Graphic card, extra 16GB RAM, 1TB SSD
// Total Cost:  36500