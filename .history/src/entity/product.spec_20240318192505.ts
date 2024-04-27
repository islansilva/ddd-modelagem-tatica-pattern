import Product from "./product";

describe("Product unit tests", () => {

    it("should throw error when id is empty", () => {

        expect(() => {
            const product = new Product("", "Product 1", 100);
        }).toThrow("Id is required");

    })

    it("should throw error when name is empty", () => {
        expect(() => {
            const product = new Product("123", "", 100);
        }).toThrow("Name is required");
    })

    it("should throw error when price is empty", () => {
        expect(() => {
            const product = new Product("123", "Product 1", -1);
        }).toThrow("Name is required");
    })


})