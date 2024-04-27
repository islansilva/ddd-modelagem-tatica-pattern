import EventInterface from "./event.interface";

export default interface EventHandlerInterface<T extends EventInterface=EventInte> {
    handle(event: T): void;
}