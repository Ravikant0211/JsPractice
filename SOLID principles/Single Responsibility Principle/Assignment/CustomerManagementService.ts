export class Customer {
    constructor(public id: string, public name: string, public email: string) {}
}

export class CustomerManagementService {
    customers: Customer[] = [];

    addCustomer(customer: Customer) {
        this.customers.push(customer);
    }

    getCustomerById(customerId: string) {
        return this.customers.find(customer => customer.id === customerId);
    }

    updateCustomer(customerId: string, updateInfo: Partial<Customer>) {
        let customer = this.getCustomerById(customerId);
        if (customer) {
            Object.assign(customer, updateInfo);
        }
    }
}