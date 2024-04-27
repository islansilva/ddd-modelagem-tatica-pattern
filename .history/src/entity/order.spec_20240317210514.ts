import Order from "./order";

describe("Order unit tests", () => {

    it("should throw error when id is empty", () => {
        
        expect(() => {
            let customer = new Order("", "123");
        }).toThrowE("Name is required");
    })


})