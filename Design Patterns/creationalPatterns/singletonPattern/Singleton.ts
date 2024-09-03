class Singleton {
    private static instance: Singleton;

    // private constructor to restric direct class to constructor using 'new'
    private constructor() {}

    // Method to retrieve the single instance of the class
    public static getInstance(): Singleton {

        if (!Singleton.instance) {

            Singleton.instance = new Singleton();

        }

        return Singleton.instance;
    }

    public showSomeBusinessLogic() {
        
        console.log('Executing some business logic...');

    }

}

const instance1 = Singleton.getInstance();
instance1.showSomeBusinessLogic(); // Executing some business logic...

const instance2 = Singleton.getInstance();
instance2.showSomeBusinessLogic(); // Executing some business logic...

console.log(instance1 === instance2); // true

// When 'getInstance' is called multiple times, it returns the same object as shown
// 'instance1 === instance2'