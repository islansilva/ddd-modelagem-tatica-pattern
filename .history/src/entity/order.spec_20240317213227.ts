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
        const item = new OrderItem("1", "Item 1", 100);
        const order = new Order("1", "Customer1", [item]);




    })


})