import Product from "../entity/product";
import RepositoryInterface from "./repository-interface";

export default interface ProductRepositoryInterface extends RepositoryInterface<Product> {}


export default class Teste implements ProductRepositoryInterface {
    
}