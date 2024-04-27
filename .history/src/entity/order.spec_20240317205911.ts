describe("Order unit tests", () => {

    it("should throw error when name is empty", () => {
        
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrow("Name is required");
    })


})