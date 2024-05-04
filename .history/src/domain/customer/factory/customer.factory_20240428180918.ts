import {v4 as uuid} from "uuid";
import Customer from "../entity/customer";

export default class CustomerFactory {
    public static createFactory(name: string): Customer {
        return new Customer(uuid(), name);
    }

}