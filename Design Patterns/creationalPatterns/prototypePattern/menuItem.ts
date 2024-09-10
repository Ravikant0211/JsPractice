type Ingredients = {
    lettuce: boolean;
    tomatoes: boolean;
    onions: boolean;
}

// Prototype interface
interface IPrototype {
    clone (type: number): this;
}

// Prototype
class MenuItem implements IPrototype {
    name: string;
    price: number;
    ingredients: Ingredients;

    constructor(name: string, price: number, ingredients: Ingredients) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
    }

    clone(type: number): this {
        if (type === 1) {
            // create shallow copy
            return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        } else if (type === 2) {
            // create deep copy
            return JSON.parse(JSON.stringify(this)); // it breaks the prototype chain, hence not advisable to use
        } else {
            throw new Error('Invalid clone type');
        }
    }
}

// client
const originalMenuItem = new MenuItem('Cheeseburger', 10.95, { lettuce: true, tomatoes: true, onions: true });
const clonedMenuItem = originalMenuItem.clone(2);

clonedMenuItem.name = 'Double Cheeseburger';
clonedMenuItem.ingredients.tomatoes = false;


console.log('originalMenuItem: ', originalMenuItem);
console.log('======================================');
console.log('clonedMenuItem: ', clonedMenuItem);