// class PaymentService {
//     processPayment() {
//         console.log('Processing payment....');
//     }
// }

// class ShoppingCart {
//     private readonly paymentService: PaymentService;

//     constructor(paymentService: PaymentService) {
//         this.paymentService = paymentService;
//     }

//     checkout() {
//         this.paymentService.processPayment();
//     }
// }

// const paymentService = new PaymentService();
// const shoppingCart = new ShoppingCart(paymentService);
// shoppingCart.checkout(); // Processing payment....

// Here, the ShoppingCart class directly depends on the PaymentService class. If we want to switch 
// to a different payment service (e.g., StripePaymentService), we would need to modify the 
// ShoppingCart class.