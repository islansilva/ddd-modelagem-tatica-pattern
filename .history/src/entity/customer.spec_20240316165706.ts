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
        
        let customer = new Customer("123", "");
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrow("Name is required");
    })

})