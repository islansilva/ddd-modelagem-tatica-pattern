import Product from "../product/entity/product";

export default class  ProductService {

    static increasePrice(products: Product[], percentage: number): void {
        products.forEach(product => {
            product.changePrice(product.price * (1 + (percentage / 100)));
        })
    }
}