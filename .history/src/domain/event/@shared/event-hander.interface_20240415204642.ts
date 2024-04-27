import EventInterface from "./event.interface";

export default interface EventHandlerInterface<T extends EventInterface=EventInterface> { //O EventInterface=
    handle(event: T): void;
}