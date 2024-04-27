import EventDispatcherInterface from "./event-dispatcher.interface";
import EventHandlerInterface from "./event-hander.interface";
import EventInterface from "./event.interface";

export default class EventDispatcher implements EventDispatcherInterface {

    private eventsHandlers: {
        [eventName: string]:
    }

    notify(event: EventInterface): void {
        throw new Error("Method not implemented.");
    }
    register(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {
        throw new Error("Method not implemented.");
    }
    unregister(eventName: string, eventHandler: EventDispatcherInterface): void {
        throw new Error("Method not implemented.");
    }
    unregisterAll(): void {
        throw new Error("Method not implemented.");
    }

}