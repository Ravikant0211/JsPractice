class PaymentService {
    processPayment(amount: number) {
        console.log(`Processing payment of $${amount}`);
    }
}

class InventoryService {
    updateInventory(item: string, quantity: number) {
        console.log(`Updating inventory for ${item}, quantity: ${quantity}`);
    }
}

class OrderService {
    confirmOrder(orderId: string) {
        console.log(`Order ${orderId} confirmed`);
    }
}

class CheckoutFacade {
    private paymentService: PaymentService;
    private inventoryService: InventoryService;
    private orderService: OrderService;

    constructor() {
        this.paymentService = new PaymentService();
        this.inventoryService = new InventoryService();
        this.orderService = new OrderService();
    }

    checkout(item: string, quantity: number, amount: number) {
        this.orderService.confirmOrder(item);
        this.inventoryService.updateInventory(item, quantity);
        this.paymentService.processPayment(amount);
    }
}

// usage
const checkoutFacade = new CheckoutFacade();
checkoutFacade.checkout('Laptop', 1, 50000);