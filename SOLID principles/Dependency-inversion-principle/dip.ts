interface Keyboard {
    connect(): void;
}

class BluetoothKeyboard implements Keyboard {
    connect(): void {
        console.log('Bluetooth Keyboard connected!');
    }
}

class ElectricKeyboard implements Keyboard {
    connect(): void {
        console.log('Electric keyboard connected!');
    }
}

class Computer {
    private readonly keyboard: Keyboard;

    constructor(keyboard: Keyboard) {
        this.keyboard = keyboard;
    }

    useKeyBoard() {
        this.keyboard.connect();
    }
}

const bluetoothKeyboard = new BluetoothKeyboard();
const electricKeyboard = new ElectricKeyboard();
const computer = new Computer(electricKeyboard);
computer.useKeyBoard();