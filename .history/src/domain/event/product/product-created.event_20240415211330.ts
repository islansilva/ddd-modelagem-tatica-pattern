import EventInterface from "../@shared/event.interface";

export default class ProductCreatedEvent implements EventInterface {
    dataTimeOcurred: Date;
    eventData: any;

}