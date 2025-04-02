import { EventBus } from "@server/stores/EventBus";

export default interface EventBusListener{
    eventBus: EventBus;
}