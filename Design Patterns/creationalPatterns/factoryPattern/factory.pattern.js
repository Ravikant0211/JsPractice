// IceCreame factory

class IcecreameFactory {
    constructor() {}
    createIceCreame(flavour) {
        let iceCream;
        if (flavour === 'chocolate') {
            iceCream = new Chocolate();
        } else if (flavour === 'mint') {
            iceCream = new Mint();
        } else if (flavour === 'strawberry') {
            iceCream = new Strawberry('STRAWBERRY');
        }
        return iceCream;
    }
}

class Chocolate {
    constructor() {
        this.iceCreamFlavour = 'chocolate';
        this.message = function () {
            return `You chose the ${this.iceCreamFlavour} flavour.`
        }
    }
}

class Mint {
    constructor() {
        this.iceCreamFlavour = 'mint';
        this.message = function () {
            return `You chose the ${this.iceCreamFlavour} flavour.`
        }
    }
}

class Strawberry {
    iceCreamFlavour = 'strawberry';
    constructor(flavour) {
        if (flavour) {
            this.iceCreamFlavour = flavour;
        }
    }
    message () {
        return `You chose the ${this.iceCreamFlavour} flavour.`
    }
}

const icecreamFactory = new IcecreameFactory();

const chocolate = icecreamFactory.createIceCreame('chocolate');
const mint = icecreamFactory.createIceCreame('mint');
const strawberry = icecreamFactory.createIceCreame('strawberry');

console.log(chocolate.message());
console.log(mint.message());
console.log(strawberry.message());

// You chose the chocolate flavour.
// You chose the mint flavour.
// You chose the STRAWBERRY flavour.