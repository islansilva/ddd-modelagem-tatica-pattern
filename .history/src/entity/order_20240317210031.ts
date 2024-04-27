import OrderItem from "./order_item";

export default class Order {
    private _id: string;
    private _customerId: string;
    _items: OrderItem[];
    _total: number;

    constructor(id: string, customerId: string, items: OrderItem[], total: number) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = total;
    }

}