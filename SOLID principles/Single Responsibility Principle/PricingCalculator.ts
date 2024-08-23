import { Product } from "./order";

export class PricingCalcutor {
    calculatePricing (products: Product[]) {
        return products.reduce((total, product) => total + product.price, 0);
    }
}