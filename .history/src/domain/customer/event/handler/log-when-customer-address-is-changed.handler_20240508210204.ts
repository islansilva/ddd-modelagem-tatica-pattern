
import EventHandlerInterface from "../../../@shared/event/event-hander.interface";
import EventInterface from "../../../@shared/event/event.interface";

export default class LogCustomerAddressChangedHandler implements EventHandlerInterface< {
    handle(event: EventInterface): void {
        console.log(`Endereço do cliente: ${event.eventData.id}, ${event.eventData.nome} alterado para: ${event.eventData.endereco}`);
    }

}