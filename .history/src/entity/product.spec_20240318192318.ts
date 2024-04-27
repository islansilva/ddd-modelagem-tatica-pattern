import Product from "./product";

describe("Product unit tests", () => {

    it("should throw error when id is empty", () => {

        expect(() => {
            const product = new Product("", "Product 1", 100);
        }).toThrow("Id is required");

        expect(() => {
            const product = new Product("123", "", 100);
        })

    })


})