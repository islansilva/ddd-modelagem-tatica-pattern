import EventInterface from "./event.interface";

export default interface EventHandlerInterface<T> {
    handle(event: T): void;
}