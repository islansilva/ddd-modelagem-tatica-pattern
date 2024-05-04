import { UUID } from "sequelize";
import Product from "../entity/product";
import ProductInterface from "../entity/product.interface";

export default class ProductFactory {

    public static create (type: string, name: string, price: number): ProductInterface {
        return new Product(UUID)
    }

}