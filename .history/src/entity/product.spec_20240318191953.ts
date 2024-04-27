import Order from "./order";
import OrderItem from "./order_item";

describe("Product unit tests", () => {

    it("should throw error when id is empty", () => {

        expect(() => {
            const product = new Product("", "Product 1", 100);
        }).toThrow("")

    })


})