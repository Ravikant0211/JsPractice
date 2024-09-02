interface PaymentService {
    processPayment(): void;
}

class ShoppingCart {
    private readonly paymentService: PaymentService;

    constructor(paymentService: PaymentService) {
        this.paymentService = paymentService;
    }

    checkout() {
        this.paymentService.processPayment();
    }
}

class StripePaymentService implements PaymentService {
    processPayment(): void {
        console.log('Processing payment via Stripe....');
    }
}

class PaypalPaymentService implements PaymentService {
    processPayment(): void {
        console.log('Processing payment via Paypal....');
    }
}


const stripePaymentService = new StripePaymentService();
const cart1 = new ShoppingCart(stripePaymentService);
cart1.checkout(); // Processing payment via Stripe....


const paypalPaymentservice = new PaypalPaymentService();
const cart2 = new ShoppingCart(paypalPaymentservice);
cart2.checkout(); // Processing payment via Paypal....