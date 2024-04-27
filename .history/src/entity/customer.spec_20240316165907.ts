import Customer from "./customer"

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

        //Arrange
        let customer = new Customer("123", "John");

        //
        customer.changeName("Jane");
        expect(customer.name).toBe("Jane");
    })

})