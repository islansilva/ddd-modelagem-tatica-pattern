import EventInterface from "./event.interface";

export default interface EventHandlerInterface<T extends > {
    handle(event: T): void;
}