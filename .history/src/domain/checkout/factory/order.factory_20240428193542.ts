
interface OrderFactoryProps {
    id: string,
    customerId: string,
    items: {
        id: string,
        name: string,
        productId: string,
        quantity: number,
        price: number;
    }
} [];

export default class OrderFactory {

    public static create(props: OrderFactoryProps)
}