import {v4 as uuid} from "uuid";import {v4 as uuid} from "uuid";

describe("Order factory unit test", () => {

    it("should create an order", () => {
        const orderProps = {
            id: uuid(),
            customerId: uuid(),
            items: [
                {
                    id: uuid(),
                    name: "Product 1",
                    productId: uuid(),
                    quantity: 1, 
                    
                }
            ]
        }
    });


})