class LoggingService {

    private static instance: LoggingService;

    private constructor() {}

    public static getInstance() {
        if (!this.instance) {
            this.instance = new LoggingService();
        }
        return this.instance;
    }

    public printMessage(message: string) {
        console.log(`Printing message: ${message}`);
    }

}

const loggingService = LoggingService.getInstance();

loggingService.printMessage('Hello world!'); // Printing message: Hello world!