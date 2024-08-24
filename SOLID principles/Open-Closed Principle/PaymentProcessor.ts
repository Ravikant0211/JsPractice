// Open-Close principle: 
// - In object-oriented-programming, the OCP principle states that the entities like
//   class, function etc should be open for extension but close for modification.
// - In other words, It should be easy to add a new feature instead of changing the existing code.

// Violation of Open-Close Principle
// class PaymentProcessor {
//     processPayment(amount: number, paymentType: string) {
//         if (paymentType === 'paypal') {
//             console.log(`Processing payment for amount of Rs ${amount} using paypal`);
//         } else if (paymentType === 'creditCard') {
//             console.log(`Processing payment for amount of Rs ${amount} using paypal`);
//         } else if (paymentType === 'paytm') {
//             console.log(`Processing payment for amount of Rs ${amount} using paytm`);
//         } else {
//             throw new Error('Unsupported payment type');
//         }
//     }
// }

// const paymentProcessor = new PaymentProcessor();
// paymentProcessor.processPayment(100, 'paytm');

interface IPaymentProcessor {

    processPayment(amount: number): void;

}

export class PaymentProcessor {

    processor: IPaymentProcessor;

    constructor(processor: IPaymentProcessor) {

        this.processor = processor;

    }

    processPayment(amount: number) {

        this.processor.processPayment(amount);

    }
}

class PaypalProcessor implements IPaymentProcessor {

    processPayment(amount: number) {

        console.log(`Processing payment for amount of Rs ${amount} using paypal`);

    }
}

class PaytmProcessor implements IPaymentProcessor {

    processPayment(amount: number): void {
        
        console.log(`Processing payment for amount of Rs ${amount} using paytm`);

    }

}

const paypalProcessor = new PaypalProcessor();

const paytmProcessor = new PaytmProcessor();

const paymentProcessor = new PaymentProcessor(paytmProcessor);

paymentProcessor.processPayment(100);