export default class OrderItem {
    _id: string;
    _name: string;
    _price: number;
    _quantity: number;

    constructor(id: string, name: string, price: numbe, quantity: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._
    }


    get price(): number {
        return this._price;
    }

    orderItemTotal(): number {
        return this._price * this._quantity;
      }

}