import EventInterface from "../@shared/event.interface";

export default class CustomerCreatedEvents implements EventInterface {
    dataTimeOcurred: Date;
    eventData: any;

    constructor(eventData: any) {
        this.dataTimeOcurred = Date();
        this.eventData = eventData;
    }

}