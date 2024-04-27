import EventInterface from "../@shared/event.interface";

export default class CustomerCreatedEvents implements EventInterface {
    dataTimeOcurred: Date;
    eventData: any;

}