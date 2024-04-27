
import Customer from "../../entity/customer";
import CustomerAddressChangedEvent from "../customer/customer-address-changed.event";
import CustomerCreatedEvents from "../customer/customer-created.event";
import LogCustomerAddressChangedHandler from "../customer/handle/log-when-customer-address-is-changed.handler";
import Log1CustomerIsCreatedHandler from "../customer/handle/log1-when-customer-is-created";
import Log2CustomerIsCreatedHandler from "../customer/handle/log2-when-customer-is-created";
import SendEmailWhenProductIsCreatedHandler from "../product/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../product/product-created.event";
import EventDispatcher from "./event-dispatcher";

describe("Domain events tests", () => {

    it("should register an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

    });

    it("should unregister an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

        eventDispatcher.unregister("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(0);
    

    })


    it("should unregister all event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

        eventDispatcher.unregisterAll();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeUndefined();
    

    })


    it("should notify all events handler when Product is created", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

        const productCreatedEvent = new ProductCreatedEvent({
            name: "Product 1",
            description: "Product 1 description",
            price: 10.0
        });

        // Quando o notify for executado, o SendEmailWhenProductIsCreatedHandler.handle() deve ser chamado
        eventDispatcher.notify(productCreatedEvent);
        expect(spyEventHandler).toHaveBeenCalled();
    })

    it("should notify all events handler when Customer is created", () => {
        const eventDispatcher = new EventDispatcher();
        const eventLog1Handler = new Log1CustomerIsCreatedHandler();
        const eventLog2Handler = new Log2CustomerIsCreatedHandler();

        const spyEvent1Handler = jest.spyOn(eventLog1Handler, "handle");
        const spyEvent2Handler = jest.spyOn(eventLog2Handler, "handle");

        eventDispatcher.register("CustomerCreatedEvents", eventLog1Handler);
        eventDispatcher.register("CustomerCreatedEvents", eventLog2Handler);

        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventLog1Handler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][1]).toMatchObject(eventLog2Handler);

        const customerCreatedEvent = new CustomerCreatedEvents(new Customer("customerId1","Customer 1"))

        eventDispatcher.notify(customerCreatedEvent);

        expect(spyEvent1Handler).toHaveBeenCalled();
        expect(spyEvent2Handler).toHaveBeenCalled();
    })

    it("should notify all events handler when the customer address changes", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new LogCustomerAddressChangedHandler();

        const spyEventHandler = jest.spyOn(eventHandler, "handle")

        eventDispatcher.register("CustomerAddressChangedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"][0]).toMatchObject(eventHandler);

        const customerAddressChangedEvent = CustomerAddressChangedEvent({
            id
        }) 


        expect(spyEventHandler).toHaveBeenCalled();

    })

});