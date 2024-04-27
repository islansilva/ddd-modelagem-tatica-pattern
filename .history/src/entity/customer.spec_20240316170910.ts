import Customer from "./customer"
import Address from "./address";

describe("Customer unit tests", () => {
    it("should throw error when id is empty", () => {
        
        expect(() => {
            let customer = new Customer("", "Islan");
        }).toThrow("Id is required");
    })

    it("should throw error when name is empty", () => {
        
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrow("Name is required");
    })

    it("should changename", () => {
        
        //Triple A

        // Arrange
        let customer = new Customer("123", "John");

        // Act
        customer.changeName("Jane");

        // Assert
        expect(customer.name).toBe("Jane");
    })

    it("should activate customer", () => {
        const customer = new Customer ("1", "Customer 1");
        const address = new Address("Street 1",123, "01234-212", "São Paulo");
        customer.Address = address;

        customer.activate();

        expect(customer.isActive()).toBe(true);

    })

    it("should throw error when address is undefined when you activate a customer", () => {
        const customer = new Customer ("1", "Customer 1");

        

        expect(() => {
            customer.activate();
        }).toThrow("");

        expect(customer.isActive()).toBe(true);

    })


    it("should deactivate customer", () => {
        const customer = new Customer ("1", "Customer 1");
        customer.desactivate();

        expect(customer.isActive()).toBe(false);

    })

})