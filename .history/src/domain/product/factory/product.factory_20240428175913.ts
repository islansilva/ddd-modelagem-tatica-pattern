import Product from "../entity/product";
import ProductInterface from "../entity/product.interface";
import {v4 as uuid} from "uuid";

export default class ProductFactory {

    public static create (type: string, name: string, price: number): ProductInterface {

        if(type.equals("a")) {}
        return new Product(uuid(), name, price);
    }

}