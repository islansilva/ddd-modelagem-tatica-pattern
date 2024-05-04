import CustomerFactory from "./customer.factory";


describe("Customer factory unit test", () => {

    it("should create a customer", () => {
        let customer = CustomerFactory.createFactory("John");

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John");
        expect(customer.address).toBeUndefined();
    })


    it("should create a customer with an address", () => {
        let customer = CustomerFactory.createFactory("John");

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John");
        expect(customer.address).toBeUndefined();
    })


});