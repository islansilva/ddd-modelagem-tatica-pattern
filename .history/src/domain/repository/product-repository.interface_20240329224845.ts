import Product from "../entity/product";
import RepositoryInterface from "./repository-interface";

export default class ProductRepositoryInterface implements RepositoryInterface<Product> {
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