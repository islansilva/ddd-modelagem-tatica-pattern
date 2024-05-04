import Product from "../entity/product";
import ProductInterface from "../entity/product.interface";
import {v4 as uuid} from "uuid";

export default class ProductFactory {

    public static create (type: string, name: string, price: number): ProductInterface {

        switch(type) {
            case "a":
                return new Product(uuid(), name, price);
            case "b":
                return new Product(uuid(), name, price);
        }


        if(type.equals("a")) {
        
        }
    }

}