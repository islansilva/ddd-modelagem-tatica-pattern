import EventHandlerInterface from "../../@shared/event-hander.interface";
import ProductCreatedEvent from "../product-created.event";

export default class SendEmailWhenProductIsCreatedHandler implements EventHandlerInterface<ProductCreatedEvent> {
    handle(event: ProductCreatedEvent): void {
        throw new Error("Method not implemented.");
    }
    
}