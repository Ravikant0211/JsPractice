import { Invoice, SimpleInvoiceStrategy, SummaryInvoiceStrategy } from './Invoice';
import { Order, Product } from './order';
import { PaymentProcessor } from './PaymentProcessor';
import { PricingCalcutor } from './PricingCalculator';

const product1 = new Product('1', 'Laptop', 500);
const product2 = new Product('2', 'Iphone', 1000);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);

const products = order.getProducts();

// Calculating price
const pricingCalculator = new PricingCalcutor();
const total = pricingCalculator.calculatePricing(products);

// Generating invoice
const simpleInvoiceStrategy = new SimpleInvoiceStrategy();
const summaryInvoiceStrategy = new SummaryInvoiceStrategy();

const invoice = new Invoice(summaryInvoiceStrategy);
invoice.generateInvoice(products, total);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(order);

