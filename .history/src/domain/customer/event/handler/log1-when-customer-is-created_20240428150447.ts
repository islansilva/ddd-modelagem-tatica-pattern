import EventHandlerInterface from "../../../@shared/event/event-hander.interface";
import EventInterface from "../../../@shared/event/event.interface";

export default class Log1CustomerIsCreatedHandler implements EventHandlerInterface {
    handle(event: EventInterface): void {
        console.log(`Esse é o primeiro console.log do evento: CustomerCreated.`)
    }

}