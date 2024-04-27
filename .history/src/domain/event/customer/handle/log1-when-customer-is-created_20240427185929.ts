import EventHandlerInterface from "../../@shared/event-hander.interface";
import EventInterface from "../../@shared/event.interface";

export default class Log1CustomerIsCreatedHandler implements EventHandlerInterface {
    handle(event: EventInterface): void {
        console.log()
    }

}