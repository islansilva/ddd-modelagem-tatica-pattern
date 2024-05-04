import CustomerFactory from "./customer.factory";
import {v4 as uuid} from "uuid";

describe("Customer factory unit test", () => {

    it("should create a customer", () => {
        let customer = CustomerFactory.createFactory("John");

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("John");
        expect(customer.address).toBeUndefined();
    })


});