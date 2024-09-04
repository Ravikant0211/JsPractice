interface IComputerBuilder {
    setCPU(cpu: string): this;
    setGPU(gpu: string): this;
    setRAM(ram: string): this;
    setStorage(storage: string): this;
    setPowerSupply(powerSupply: string): this;
    build(): Computer;
}

class Computer {
    cpu: string = '';
    gpu: string = '';
    ram: string = '';
    storage: string = '';
    powerSupply: string = '';

    showSpecifications(): void {
        console.log(`The computer is made of ${this.cpu} CPU, ${this.gpu} GPU, ${this.ram} RAM, and ${this.storage} storage. It takes ${this.powerSupply} Power supply!`);
    }
}

class ComputerBuilder implements IComputerBuilder {
    computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu: string): this {
        this.computer.cpu = cpu;
        return this;
    }

    setGPU(gpu: string): this {
        this.computer.gpu = gpu;
        return this;
    }

    setRAM(ram: string): this {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string): this {
        this.computer.storage = storage;
        return this;
    }

    setPowerSupply(powerSupply: string): this {
        this.computer.powerSupply = powerSupply;
        return this;
    }

    build(): Computer {
        return this.computer;
    }
}

export class ComputerDirector {

    private builder: ComputerBuilder;

    constructor() {
        this.builder = new ComputerBuilder();
    }

    public buildGamingPC(): Computer {
        return this.builder
        .setCPU("Intel i9")
        .setGPU("NVIDIA RTX 3080")
        .setRAM("32 GB")
        .setStorage("1TB SSD")
        .setPowerSupply("750W")
        .build();
    }

    public buildOfficePC(): Computer {
        return this.builder
        .setCPU("Intel i5")
        .setGPU("Integrated GPU")
        .setRAM("16GB")
        .setStorage("512GB SSD")
        .setPowerSupply("500W")
        .build();
    }
}

