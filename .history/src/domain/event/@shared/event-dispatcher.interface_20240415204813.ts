import EventInterface from "./event.interface";

export default interface EventDispatcherInterface {
    notify(event: EventInterface): void;
}