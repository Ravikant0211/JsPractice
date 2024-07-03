function ToyFactory() {
    this.toy = ToyDuck;
    this.createToy = function (toyChosen) {
        if (toyChosen.toyType === 'car') {
            this.toy = ToyCar;
        } else if (toyChosen.toyType === 'duck') {
            this.toy = ToyDuck;
        }
        return new this.toy(toyChosen);
    }
}

function ToyDuck ({ color, price }) {
    this.color = color;
    this.price = price;
}

function ToyCar({ color, price, name }) {
    this.color = color;
    this.price = price;
    this.name = name;
}

const toyFactory = new ToyFactory();

const car = toyFactory.createToy({ toyType: 'car', color: 'Black', price: 15, name: 'Honda' });
console.log(car);
console.log(car instanceof ToyCar);
// ToyCar { color: 'Black', price: 15, name: 'Honda' }
// true


const duck = toyFactory.createToy({ toyType: 'duck', color: 'Yellow', price: 10 });
console.log(duck);
console.log(duck instanceof ToyDuck);
// ToyDuck { color: 'Yellow', price: 10 }
// true



