describe("Customer factory unit test", () => {

    it("should create a customer", () => {
        let customer = CustomerFactory.createFactory("John");

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe()

    })


});