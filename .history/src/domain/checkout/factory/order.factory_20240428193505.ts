
interface OrderFactoryProps {
    id: string,
    customerId: string,
    items: {
        id: string,
        name: string,
        productId: string,
        quantity: number,
        price
    }
}

export default class OrderFactory {

    public static create()
}