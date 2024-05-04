describe("Product factory unit test", () => {

    it("should create a product type a", () => {

        const product = ProductFactory.create("a", "Product A", 1);
        
        expect(product.id).toBeDefined();
        expect(product.name).toBe("Product A");
        expect(product.price).toBe(1);
        expect(product.constructor.name)

    })


});