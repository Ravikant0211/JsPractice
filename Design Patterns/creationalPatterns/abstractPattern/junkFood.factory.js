function Soda (name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.display = function () {
        console.log(`The ${this.type} ${this.name} costs ${this.price} dollars.`);
    }
}

function Chips (name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.display = function () {
        console.log(`The ${this.type} ${this.name} costs ${this.price} dollars.`);
    }
}

function JunkfoodFactory () {
    this.food = Chips;
    this.createFood = function (name, type, price) {
        if (type == 'soda') {
            this.food = Soda;
        } else if (type == 'chips') {
            this.food = Chips;
        }
        return new this.food(name, type, price);
    }
}

// client

const junkfoodFactory = new JunkfoodFactory();

let chips = junkfoodFactory.createFood("chips","potato",1.50)
chips.display()

chips = junkfoodFactory.createFood("chips","corn",2.50)
chips.display()

let soda = junkfoodFactory.createFood("soda", "Energy Drink", 10)
soda.display()

soda = junkfoodFactory.createFood("soda", "Cola", 7)
soda.display()