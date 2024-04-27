import Order from "./order";

describe("Order unit tests", () => {

    it("should throw error when id is empty", () => {
        
        expect(() => {
            let customer = new Order("", "123", []);
        }).toThrow("Id is required");
    })

    it("should throw error when customerId is empty", () => {
        
        expect(() => {
            let customer = new Order("123", "", []);
        }).toThrow("CustomerId is required");
    })

    it("should throw error when customerId is empty", () => {
        
        expect(() => {
            let customer = new Order("123", "", []);
        }).toThrow("Item qtd must be greater than 0");
    })


})