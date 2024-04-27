import EventHandlerInterface from "../../@shared/event-hander.interface";
import EventInterface from "../../@shared/event.interface";

export default class LogCustomerAddressChangedHandler implements EventHandlerInterface {
    handle(event: EventInterface): void {
        console.log('Endereço do cliente: {id}, {event.eventnome} alterado para: {endereco}');
    }

}