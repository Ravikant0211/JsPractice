// class Keyboard {
//     connect () {
//         console.log('Keyboard connected!');
//     }
// }

// class Computer {
//     private keyboard: Keyboard;

//     constructor(keyboard: Keyboard) {
//         this.keyboard = keyboard;
//     }

//     useKeyboard() {
//         this.keyboard.connect();
//     }
// }

// const keyboard = new Keyboard();
// const computer = new Computer(keyboard);
// computer.useKeyboard(); // Keyboard connected!

// Here the Computer class directly depends on the Keyboard class. If we want to later user another type
// of keyboard let's say (Bluetooth keyboard), we will also have to make changes in the Computer class.
// This makes Computer class dependent on the keyboard class, making the code tightly coupled and less
// flexible to the changes. Hence it violates the dependency inversion principle.