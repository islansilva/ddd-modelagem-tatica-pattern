import Order from "./order";
import OrderItem from "./order_item";

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
            let customer = new Order("123", "123", []);
        }).toThrow("Items are required");
    })

    it("should calculate total", () => {
        //Arrange
        const item1 = new OrderItem("1", "prod1", "Item 1", 100, 3);
        const item2 = new OrderItem("2", "Item 2", 150, 2);
        const order = new Order("1", "Customer1", [item1, item2]);

        let total = order.total();

        expect(total).toBe(600);

    })


})