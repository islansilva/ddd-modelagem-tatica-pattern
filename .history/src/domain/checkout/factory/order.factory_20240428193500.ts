
interface OrderFactoryProps {
    id: string,
    customerId: string,
    items: {
        id: string,
        name: string,
        productId: string,
        quantity
    }
}

export default class OrderFactory {

    public static create()
}