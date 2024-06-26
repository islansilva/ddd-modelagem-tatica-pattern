import Order from "./entity/order";
import RepositoryInterface from "../repository/repository-interface";

export default interface OrderRepositoryInterface extends RepositoryInterface<Order> {}