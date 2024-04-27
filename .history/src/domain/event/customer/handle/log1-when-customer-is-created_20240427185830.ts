import EventHandlerInterface from "../../@shared/event-hander.interface";
import EventInterface from "../../@shared/event.interface";

export default class CustomerIsCreatedHandler implements EventHandlerInterface {
    handle(event: EventInterface): void {
        throw new Error("Method not implemented.");
    }

}