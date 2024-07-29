// - Like a static method, static property is also shared by all instances of the class.
// - Use static keyword to define a static property
// - Use the className.staticPropertyName to access the static property in a static method.
// - Use the this.constructor.staticPropertyName or className.staticPropertyName to access
//   the static property in a constructor.

class Item {
    static count = 3;
    static getCount() {
        return Item.count;
    }
}
console.log(Item.getCount()); // 3

// To access a static property in a class constructor or intance method, use the following syntax-
// - className.staticPropertyName
// - this.constructor.propertyName

class Item {
    constructor (name, quantity) {
        this.name = name;
        this.quantity = quantity;
        // Item.count++;
        this.constructor.count++; // On creation of new instance of type Item, this line is executed 
        // to increase the count
    }
    static count = 0;
    static getCount() {
        return Item.count;
    }
}

const pen = new Item('Pen', 5);
const notebook = new Item('notebook', 3);
console.log(Item.getCount()); // 2


