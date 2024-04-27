describe("Product service unit tests", () => {

    it("should change the prices of all products", () => {
        const product1 = new Product("1", "Prod 1", 100);
        const product2 = new Product("2", "Prod 2", 20);

        const products = [product1, product2];

        ProductService.increasePrice(products, 100);

        expect(product1.price)

    });
});