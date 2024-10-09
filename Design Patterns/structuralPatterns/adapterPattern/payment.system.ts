// Adaptee
class Paypal {
    sendPayment(amount: number): void {
        console.log(`Making payment of Rs. ${amount} via Paypal...`);
    }
}

// Adaptee
class Stripe {
    makePayment(amount: number): void {
        console.log(`Making payment of Rs. ${amount} via Stripe...`);
    }
}

// Let's say initially the client is using Paypal to process the payment, Paypal uses 'sendPayment' method.
// But now the payment processing system switching to Stripe, which uses 'makePayment' method to process the payment. This
// will lead to changes in the client side code, which might be the legacy application. So we can't force our clients to 
// make changes in their codebase. 

// so to avoid such situations, while creating payment processing systems, we can follow adapter pattern, which provide us
// with an unified interface or class.

// Target Interface
interface IPaymentProcessor {
    pay(amount: number): void;
}

// Adapter
class PaypalAdapter implements IPaymentProcessor {
    public paypal: Paypal;

    constructor(paypal: Paypal) {
        this.paypal = paypal;
    }

    pay(amount: number): void {
        this.paypal.sendPayment(amount);
    }
}

// Adapter
class StripeAdapter implements IPaymentProcessor {
    public stripe: Stripe;

    constructor(stripe: Stripe) {
        this.stripe = stripe;
    }

    pay(amount: number): void {
        this.stripe.makePayment(amount);
    }
}

// Unified Interface 
class PaymentProcessor {
    public processor: IPaymentProcessor;
    
    constructor(processor: IPaymentProcessor) {
        this.processor = processor;
    }

    processPayment(amount: number): void {
        this.processor.pay(amount);
    }
}


// Paypal
const paypal = new Paypal();
const payPalAdapter = new PaypalAdapter(paypal);

const paymentProcessor = new PaymentProcessor(payPalAdapter);
paymentProcessor.processPayment(1000);

// Stripe
const stripe = new Stripe();
const stripeAdapter = new StripeAdapter(stripe);

const paymentProcessor2 = new PaymentProcessor(stripeAdapter);
paymentProcessor2.processPayment(2000);


// Making payment of Rs. 1000 via Paypal...
// Making payment of Rs. 2000 via Stripe...