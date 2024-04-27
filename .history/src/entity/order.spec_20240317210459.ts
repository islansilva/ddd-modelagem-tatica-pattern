import Order from "./order";

describe("Order unit tests", () => {

    it("should throw error when id is empty", () => {
        
        expect(() => {
            let customer = new Order("", "");
        }).toThrow("Name is required");
    })


})