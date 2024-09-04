import { ComputerDirector } from "./computerBuilder";

const computerDirector = new ComputerDirector();

const gamingPC = computerDirector.buildGamingPC();
gamingPC.showSpecifications();
// The computer is made of Intel i9 CPU, NVIDIA RTX 3080 GPU, 32 GB RAM, and 1TB SSD storage. It takes 750W Power supply!

const officePC = computerDirector.buildOfficePC();
officePC.showSpecifications();
// The computer is made of Intel i5 CPU, Integrated GPU GPU, 16GB RAM, and 512GB SSD storage. It takes 500W Power supply!