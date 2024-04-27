import Order from "../entity/order";
import OrderItem from "../entity/order_item"

describe("Order Service unit tests", () => {
    it("should get total of all orders", () => {

        const item1 = new OrderItem("i1", "prod 1", "item 1", 200, 2);
        const item2 = new OrderItem("i2", "prod 2", "item 3", 50, 3);

        const order = new Order("1")


    })
})