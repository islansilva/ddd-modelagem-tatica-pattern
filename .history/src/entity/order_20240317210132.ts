import OrderItem from "./order_item";

export default class Order {
    private _id: string;
    private _customerId: string;
    private _items: OrderItem[];
    private _total: number;

    constructor(id: string, customerId: string, items: OrderItem[], total: number) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = total;
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + )
    }

}