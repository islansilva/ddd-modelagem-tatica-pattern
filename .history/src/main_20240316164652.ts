import Address from './entity/address';
import Customer from './entity/customer';
import Order from './entity/order';
import OrderItem from './entity/order_item';

let customer = new Customer("123", "Islan");
const address = new Address("Rua Canopo", 123, "09972-400", "Diadema");
customer.Address = address;
customer.activate();


const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 20);

const order = new Order("")