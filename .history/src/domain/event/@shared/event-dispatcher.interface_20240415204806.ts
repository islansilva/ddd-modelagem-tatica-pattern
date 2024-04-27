export default interface EventDispatcherInterface {
    notify(event: EventInterface): void;
}