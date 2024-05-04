import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";


describe("Customer factory unit test", () => {

    it("should create a customer", () => {
        let customer = CustomerFactory.create("John");

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John");
        expect(customer.address).toBeUndefined();
    })


    it("should create a customer with an address", () => {
        const address = new Address("Rua 1", 123, "12345-123", "Sao Paulo")
        let customer = CustomerFactory.createWithAddress("John", new Address(

        ));

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John");
        expect(customer.address).toBeUndefined();
    })


});