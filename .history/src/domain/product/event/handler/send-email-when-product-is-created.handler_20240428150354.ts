import EventHandlerInterface from "../../event/@shared/event-hander.interface";


export default class SendEmailWhenProductIsCreatedHandler implements EventHandlerInterface<ProductCreatedEvent> {
    
    handle(event: ProductCreatedEvent): void {
        console.log(`Sending email to .....`);
    }
    
}