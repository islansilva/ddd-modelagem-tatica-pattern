import EventHandlerInterface from "../../../@shared/event/event-hander.interface";
import EventInterface from "../../../@shared/event/event.interface";

export default class Log2CustomerIsCreatedHandler implements EventHandlerInterface<CustomerCreatedEvents> {
    handle(event: CustomerCreatedEvents): void {
        console.log(`Esse é o segundo console.log do evento: CustomerCreated.`)
    }

}