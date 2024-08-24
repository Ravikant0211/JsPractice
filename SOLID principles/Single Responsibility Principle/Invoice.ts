import { Product } from "./order";

interface IInvoiceStrategy {

    generateInvoice(products: Product[], amount: number): void;

}
export class Invoice {

    private invoiceStrategy: IInvoiceStrategy;

    constructor(invoiceStrategy: IInvoiceStrategy) {

        this.invoiceStrategy = invoiceStrategy;

    }

    generateInvoice(products: Product[], amount: number) {
        
        this.invoiceStrategy.generateInvoice(products, amount);

    }
}

export class SimpleInvoiceStrategy implements IInvoiceStrategy {

    generateInvoice(products: Product[], amount: number): void {
        
        console.log(`
            Invoice Date: ${new Date().toDateString()}
            -------------------------------
            Product Name\tPrice
                            `);
            
                    products.forEach((product) => {
                        console.log(`${product.name}\t\t${product.price}`);
                    });
                    console.log('-------------------------------');
                    console.log(`Total: ${amount}`);
        
    }

}

export class SummaryInvoiceStrategy implements IInvoiceStrategy {

    generateInvoice(products: Product[], amount: number): void {

        console.log(`
            Invoice Date: ${new Date().toDateString()}
            -------------------------------
            Number of Products: ${products.length}
            -------------------------------
            Total Amount: ${amount}
                    `);
        
    }
}