interface IPrototype {
    clone(): this;
}

// Prototype
class Product implements IPrototype {
    constructor(
        public name: string,
        public price: number,
        public category: string,
        public description: string,
    ) {}

    clone(): this {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    printProduct(): void {
        console.log(`Product: ${this.name}, Price: ${this.price}, Category: ${this.category}, Description: ${this.description}`);
    }
}

console.log(Product.prototype.constructor === Product);
// client code
const phonePrototype = new Product("Smartphone", 699, "Electronics", "Latest model with high-end specs");

// Clone the prototype to create customized products
const phone1 = phonePrototype.clone();
phone1.name = "Smartphone X";
phone1.price = 799;

const phone2 = phonePrototype.clone();
phone2.name = "Smartphone Y";
phone2.price = 599;

phone1.printProduct();
phone2.printProduct();

// The error phone1.printProduct() is not a function occurs because the clone method in your 
// Product class is using JSON.parse(JSON.stringify(this)) to create a deep copy of the object. 
// While this method successfully clones the properties, it does not preserve the prototype chain, 
// meaning the cloned object is no longer an instance of the Product class and therefore loses its methods, 
// like printProduct.