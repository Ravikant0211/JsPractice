abstract class Bird {
    abstract makeSound(): void;
}

// If a class extends the abstract class, it have to implement the methods which abstract class has.
class FlyingBird extends Bird {
    fly(): void {
        console.log('Birds are flying');
    }

    makeSound(): void {
        console.log('Birds are making sound');
    }
}

class Sparrow extends FlyingBird {
    fly(): void {
        console.log('Sparrow is flying');
    }

    makeSound(): void {
        console.log('Sparrow is making sound');
    }
}

class Panguin extends Bird {
    makeSound(): void {
        console.log('Panguin is making sound');
    }
}

const sparrow = new Sparrow();
sparrow.fly(); // Sparrow is flying
sparrow.makeSound(); // Sparrow is making sound 

const panguin = new Panguin();
panguin.makeSound(); // Panguin is making sound
// panguin.fly()  // fly method doesn't exist on panguin object

// - So to adhere to the LSP principle, we refactor our design so that not all birds are forced to implement
//   the 'fly()' method.
// - This leads to more robust and maintainable code.