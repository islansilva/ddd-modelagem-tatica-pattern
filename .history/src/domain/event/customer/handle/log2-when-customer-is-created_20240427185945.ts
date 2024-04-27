import EventHandlerInterface from "../../@shared/event-hander.interface";
import EventInterface from "../../@shared/event.interface";

export default class Log2CustomerIsCreatedHandler implements EventHandlerInterface {
    handle(event: EventInterface): void {
        console.log(`Esse é o primeiro console.log do evento: CustomerCreated.`)
    }

}