// Single Responsibility Principle
// - A class should have only one reason to change. OR
// - Gather together the things that can change for the same reason. And seperate those things that 
//   change for different reasons.

export class Product {
    id: string;
    name: string;
    price: number;

    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export class Order {
    products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(productId: string) {
        return this.products.find(product => product.id === productId);
    }

    removeProduct(productId: string) {
        this.products = this.products.filter(product => product.id !== productId);
    }
}