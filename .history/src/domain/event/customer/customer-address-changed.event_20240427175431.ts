import EventInterface from "../@shared/event.interface";

export default class CustomerAddressChangedEvent implements EventInterface {
    dataTimeOcurred: Date;
    eventData: any;

    constructor(event)

}