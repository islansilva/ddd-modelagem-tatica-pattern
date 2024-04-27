import OrderItem from "./order_item";

export default class Order {
    _id: string;
    _customerId: string;
    _items: OrderItem[];
    _total: number;

    constructor(id: string, customerId: string, items: OrderItem[], total) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
    }

}