import Product from "../entity/product";
import ProductRepositoryInterface from "./product-repository.interface";

export default class NewProduct implements ProductRepositoryInterface {
    create(entity: Product): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(entity: Product): Promise<void> {
        throw new Error("Method not implemented.");
    }
    find(id: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    
}